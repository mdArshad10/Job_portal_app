const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repository");

const userRepository = new UserRepository();

const registerValidator = async (req, res, next) => {
	try {
		const {
			fullName,
			email,
			password,
			phoneNumber,
			role,
		} = req.body;
		if (
			!fullName ||
			!email ||
			!password ||
			!phoneNumber ||
			!role
		) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				data: null,
				message: "all fields are required",
				err: null,
			});
		}

		const existingUser =
			await userRepository.getByEmail(email);
		if (existingUser) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				data: null,
				message: "user already exist",
				err: null,
			});
		}

		next();
	} catch (error) {
		console.error("registerValidator error:", error);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				success: false,
				data: null,
				message:
					"Some thing wrong with user validation",
				err: error.message,
			});
	}
};

const loginValidator = async (req, res, next) => {
	try {
		const { email, password, role } = req.body;
		if (!email || !password || !role) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				data: null,
				message: "all fields are required",
				err: null,
			});
		}

		const existingUser =
			await userRepository.getByEmail(email);
		if (!existingUser) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				data: null,
				message: "user not exist",
				err: null,
			});
		}

		next();
	} catch (error) {
		console.log(
			"some error on user input validation",
			error,
		);
		return res.status(StatusCodes.NOT_FOUND).json({
			success: false,
			data: null,
			message:
				"some thing is wrong with login validation",
			err: error,
		});
	}
};

module.exports = { registerValidator, loginValidator };
