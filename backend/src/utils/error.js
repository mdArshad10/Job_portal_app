const { StatusCodes } = require("http-status-codes");

class ErrorHandler extends Error {
	constructor(
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
		success = false,
		message = "Internal Server Error",
		errors = null,
		data = null,
	) {
		super(message);
		this.statusCode = statusCode;
		this.success = success;
		this.errors = errors;
		this.data = data;

		Error.captureStackTrace(this, constructor);
	}
}

module.exports = ErrorHandler;
