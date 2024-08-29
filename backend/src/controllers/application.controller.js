const { StatusCodes } = require("http-status-codes");
const { ApplicationServices } = require("../services");

const applicationServices = new ApplicationServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/apply/:id
// @ACCESS: public
const createJobApplication = async (req, res, next) => {
	try {
		const userId = req.user;
		const jobId = req.params?.id;
		const response =
			await applicationServices.applyForNewJob(
				userId,
				jobId,
			);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message:
				"Application registration successfully",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log("some thing went wrong");
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "Error in registering application",
			data: null,
			error: error,
		});
	}
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [GET]      /api/v1/appliedJobs
// @ACCESS: private
const getAppliedJobs = async (req, res, next) => {
	try {
		const response =
			await applicationServices.getAppliedJobs(
				req.user,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "get all applied jobs",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(error);

		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: error.message,
			data: null,
			error,
		});
	}
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [GET]      /api/v1/:id/applicants
// @ACCESS: private
const getApplicant = async (req, res, next) => {
	try {
		const response =
			await applicationServices.getApplicants(
				req.params.id,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "get all applicants",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(error);

		return res.status(StatusCodes.OK).json({
			success: true,
			message: "something wrong with get applicant",
			data: null,
			error,
		});
	}
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [PUT]      /api/v1/status/:id/update
// @ACCESS: private
const updateStatus = async (req, res, next) => {
	try {
		const { status } = req.body;
		const applicationId = req.params.id;
		const response =
			await applicationServices.applicationStatus(
				status.toLowerCase(),
				applicationId,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "status updated successfully",
			data: response,
			error: null,
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: error.message,
			data: null,
			error,
		});
	}
};

module.exports = {
	createJobApplication,
	getAppliedJobs,
	getApplicant,
	updateStatus,
};
