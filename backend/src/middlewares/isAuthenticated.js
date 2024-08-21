const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { accessSecretKey } = require("../constant.js");
const UserRepository = require("../repository/user.repository.js");

const isAuthenticated = (req, res, next) => {
	try {
		const token =
			req.cookies?.token ||
			req.headers["authorization"].split(" ")[1];
		if (!token) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({
					success: false,
					message: "No token provided",
					data: null,
					error: null,
				});
		}
		const decode = jwt.verify(token, accessSecretKey);

		if (!decode) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({
					success: false,
					message: "Invalid token",
					data: null,
					error: null,
				});
		}
		req.user = decode.userId;
		next();
	} catch (error) {
		console.log(
			"something went wrong with isAuthenticated middleware",
		);
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "Error in authentication",
			data: null,
			error: error,
		});
	}
};

const isAdmin = async (req, res, next) => {
	const userRepository = new UserRepository();
	try {
		const user = await userRepository.getById(req.user);
		if (user?.role !== "recruiter") {
			throw new Error(
				"your are not allowed to access this route",
			);
		}
		next();
	} catch (error) {
		console.log(
			"some thing wrong with isAdmin middleware",
		);
		throw new Error(
			"some thing wrong with admin panel",
		);
	}
};
module.exports = { isAuthenticated, isAdmin };
