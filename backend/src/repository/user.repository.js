const { User } = require("../models");
const ErrorHandler = require("../utils/error.js");
const { StatusCodes } = require("http-status-codes");

class UserRepository {
	async create(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
			console.log(
				"some error on userRepository",
				error,
			);
			throw error;
		}
	}

	async getAll() {
		try {
			const users = await User.find();
			return users;
		} catch (error) {
			console.log(
				"some error on userRepository",
				error,
			);
			throw error;
		}
	}

	async getById(id) {
		try {
			const user = await User.findById(id).select(
				"-password",
			);
			return user;
		} catch (error) {
			console.log(
				"some error on userRepository",
				error,
			);
			throw error;
		}
	}

	async getByEmail(email) {
		try {
			const user = await User.findOne({ email });
			return user;
		} catch (error) {
			const err = new ErrorHandler(
				false,
				error.message,
				StatusCodes.INTERNAL_SERVER_ERROR,
				error,
				null,
			);
			console.log(
				"some error on userRepository",
				error,
			);
			throw err;
		}
	}

	async updateById(id, data) {
		try {
			const user = await User.findByIdAndUpdate(
				id,
				data,
				{ new: true },
			);
			return user;
		} catch (error) {
			console.log(
				"some error on userRepository",
				error,
			);
		}
	}

	async deleteById(id) {
		try {
			const user = await User.findByIdAndDelete(id);
			return user;
		} catch (error) {
			console.log(
				"some error on userRepository",
				error,
			);
			throw error;
		}
	}
}

module.exports = UserRepository;
