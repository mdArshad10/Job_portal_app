const { StatusCodes } = require("http-status-codes");

class ErrorHandler extends Error {
	constructor(
		success = false,
		message = "Internal Server Error",
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
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

class ValidationErrorHandler extends ErrorHandler {
	constructor(errors) {
		let errorName = errors.name;
		let explanation = errors.error.map(
			err => err.message,
		);
		super(
			false,
			`${errorName}: ${explanation.join(", ")}`,
            StatusCodes.BAD_REQUEST,
            errors,
            null,
		);
	}
}

module.exports = ErrorHandler;
