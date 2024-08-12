const { User } = require("../models");

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
			console.log(
				"some error on userRepository",
				error,
			);
			throw error;
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
