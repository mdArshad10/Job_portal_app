const { StatusCodes } = require("http-status-codes");
const { JobServices } = require("../services");

const jobServices = new JobServices();

// @DESCRIPTION: this is used for post the job
// @METHOD: [POST]      /api/v1/job/create
// @ACCESS: private
const createJob = async (req, res, next) => {
	try {
		const response = await jobServices.postJob(
			data,
			req.user,
		);
		return response.status(StatusCodes.CREATED).json({
			success: true,
			message: "Job created successfully",
			data: response,
			error: null,
		});
	} catch (error) {
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
		const response = await JobServices.getAllJobs(req);
		return response.status(StatusCodes.OK).json({
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
		return response.status(StatusCodes.OK).json({
			success: true,
			message: "you get job by id",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log("there is not ");
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
