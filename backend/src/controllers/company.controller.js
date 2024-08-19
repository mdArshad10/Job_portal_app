const { StatusCodes } = require("http-status-codes");
const { CompanyServices } = require("../services");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/error");

const companyServices = new CompanyServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/company/register
// @ACCESS: public
const createCompany = async (req, res, next) => {
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

		const response =
			await companyServices.registerCompany(
				req.body,
				req.user,
			);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "your company register successfully",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(
			"some thing wrong with the controller layer",
		);
		console.log(error);
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message:
				"some thing wrong durring the register the company",
			data: null,
			error,
		});
	}
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [GET]      /api/v1/company
// @ACCESS: public
const getCompany = async (req, res, next) => {
	try {
		const resp =
			await companyServices.getCompanyByUserId(
				req.user,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `your are the owner of ${resp.name}`,
			data: resp,
			error: null,
		});
	} catch (error) {
		console.log(
			"some thing wrong with the controller layer",
		);
		console.log(error);
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message:
				"some thing wrong durring the register the company",
			data: null,
			error,
		});
	}
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [GET]      /api/v1/company/:id
// @ACCESS: public
const getCompanyById = async (req, res, next) => {
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

		const response =
			await companyServices.getCompanyUsingCompanyId(
				req.params.id,
			);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "get your company",
			data: response,
			error: null,
		});
	} catch (error) {
		console.log(
			"some thing wrong with the controller layer",
		);
		console.log(error);
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message:
				"some thing wrong durring the register the company",
			data: null,
			error,
		});
	}
};

module.exports = {
	createCompany,
	getCompany,
	getCompany,
	getCompanyById,
};
