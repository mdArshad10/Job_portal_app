const { StatusCodes } = require("http-status-codes");
const { JobServices } = require("../services");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/error");

const jobServices = new JobServices();

// @DESCRIPTION: this is used for post the job
// @METHOD: [POST]      /api/v1/job/create
// @ACCESS: private
const createJob = async (req, res, next) => {
	try {
		const { errors } = validationResult(req);

		if (errors.length != 0) {
			const message = errors.map(err => err.msg);
			throw new ErrorHandler(
				false,
				"fill all the field",
				StatusCodes.BAD_REQUEST,
				errors,
				message,
			);
		}
		

		const response = await jobServices.postJob(
			req.body,
			req.user,
		);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Job created successfully",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(error);

		console.log("some thing wrong with create job");
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "Error in creating job",
			data: null,
			error: error,
		});
	}
};

// @DESCRIPTION: get all job
// @METHOD: [GET]      /api/v1/jobs
// @ACCESS: private
const getAllJobs = async (req, res, next) => {
	try {
		const response = await jobServices.getAllJobs(req);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "you get all jobs",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log("some thing wrong with get getAllJobs");
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				success: false,
				message: "some thing wrong with getAllJobs",
				data: null,
				error: error,
			});
	}
};

// @DESCRIPTION: get job by job id
// @METHOD: [GET]      /api/v1/jobs/:id
// @ACCESS: private
const getJobByJobId = async (req, res, next) => {
	try {
		const response =
			await jobServices.getJobByUsingJobId(
				req.params.id,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "you get job by id",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log("some thing wrong with getJobByJobId");
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "some thing wrong with get Job By id",
			data: null,
			error,
		});
	}
};

// get all jobs which is created by admin
// @DESCRIPTION: get job by job id
// @METHOD: [GET]      /api/v1/jobs/admin
// @ACCESS: private
const adminCreatedJobs = async (req, res, next) => {
	try {
		const response =
			await jobServices.getJobWhichIsCreateByAdmin(
				req.user,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "get all admin created jobs",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(
			"something wrong with job controller layer",
		);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				success: false,
				message:
					"some thing wrong with job controller layer",
				data: null,
				error,
			});
	}
};

module.exports = {
	createJob,
	getAllJobs,
	getJobByJobId,
	adminCreatedJobs,
};
