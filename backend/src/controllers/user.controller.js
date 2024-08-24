const { UserServices } = require("../services");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { accessSecretKey } = require("../constant.js");
const ErrorHandler = require("../utils/error.js");
const { validationResult } = require("express-validator");

const UserService = new UserServices();

// cookie Options
const cookieOptions = {
	maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
	httpOnly: true,
	sameSite: "strict",
};

// generate the token
const generateToken = userId => {
	return jwt.sign(
		{
			userId,
		},
		accessSecretKey,
		{ expiresIn: "1d" },
	);
};

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/register
// @ACCESS: public
const registerTheUser = async (req, res, next) => {
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
		// file

		const user = await UserService.register(req);
		const token = generateToken(user._id);
		res.status(StatusCodes.CREATED)
			.cookie("token", token, cookieOptions)
			.json({
				success: true,
				message: "Account created successfully",
				data: user,
				err: null,
			});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			data: error.data,
			message: error.message,
			success: error.success,
			err: error,
		});
	}
};

// @DESCRIPTION: this is used for the login the user
// @METHOD: [POST]      /api/v1/login
// @ACCESS: public
const loginTheUser = async (req, res, next) => {
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

		const response = await UserService.login(req.body);
		console.log(response);

		const token = generateToken(response._id);
		return res
			.status(StatusCodes.OK)
			.cookie("token", token, cookieOptions)
			.json({
				success: true,
				message: `Welcome back ${response.fullName}`,
				data: response,
				err: null,
			});
	} catch (error) {
		console.log(
			"some thing wrong with login the user in controller",
			error,
		);
		return res.status(StatusCodes.BAD_GATEWAY).json({
			data: error.data,
			message: error.message,
			success: error.success,
			err: error,
		});
	}
};

// @DESCRIPTION: this is used for the logout the user
// @METHOD: [PUT]      /api/v1/profile/update
// @ACCESS: private
const getUserDetails = async (req, res, next) => {
	try {
		const response = await UserService.getUser(
			req.user,
		);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "welcome to the Job hunt",

			data: response,
			err: null,
		});
	} catch (error) {
		console.log(error);
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: true,
			message: error.message,
			data: null,
			error,
		});
	}
};

// @DESCRIPTION: this is used for the logout the user
// @METHOD: [GET]      /api/v1/logout
// @ACCESS: private
const logoutTheUser = async (req, res, next) => {
	try {
		return res
			.status(StatusCodes.OK)
			.cookie("token", "", cookieOptions)
			.json({
				success: true,
				message: "Logged Out Successfully",
				data: null,
				err: null,
			});
	} catch (error) {
		return res.status(StatusCodes.BAD_GATEWAY).json({
			success: false,
			message:
				"some thing wrong with login the user in controller",
			data: null,
			err: error,
		});
	}
};

// @DESCRIPTION: this is used for the logout the user
// @METHOD: [PUT]      /api/v1/profile/update
// @ACCESS: private
const updateTheProfile = async (req, res, next) => {
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

		const response = await UserService.updateUser(req);
		return res.status(StatusCodes.OK).json({
			message: "update the profile",
			success: true,
			data: response,
			err: null,
		});
	} catch (error) {
		console.log(
			"some error with update the profile on controller",
			error,
		);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				success: false,
				message: "some thing wrong with controller",
				data: null,
				err: error,
			});
	}
};

module.exports = {
	registerTheUser,
	loginTheUser,
	logoutTheUser,
	updateTheProfile,
	getUserDetails,
};
