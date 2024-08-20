const { StatusCodes } = require("http-status-codes");
const { ApplicationServices } = require("../services");

const applicationServices = new ApplicationServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/application/apply
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
// @METHOD: [POST]      /api/v1/application/apply
// @ACCESS: public
const 

module.exports = { createJobApplication };
