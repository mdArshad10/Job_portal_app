const { UserServices } = require("../services");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { accessSecretKey } = require("../constant.js");

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
		const user = await UserService.register(req.body);
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				data: null,
				message: error.message,
				success: false,
				err: error,
			});
	}
};

// @DESCRIPTION: this is used for the login the user
// @METHOD: [POST]      /api/v1/login
// @ACCESS: public
const loginTheUser = async (req, res, next) => {
	try {
		const response = await UserService.login(req.body);
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
		return res
			.status(StatusCodes.OK)
			.cookie("token", token, cookieOptions)
			.json({
				success: false,
				message:
					"Some thing wrong with login the user in controller",
				data: null,
				err: error,
			});
	}
};

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

module.exports = {
	registerTheUser,
	loginTheUser,
	logoutTheUser,
};
