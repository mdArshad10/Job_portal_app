const { UserRepository } = require("../repository");
const bcrypt = require("bcrypt");

class UserServices {
	constructor() {
		this.UserRepository = new UserRepository();
	}

	async register(data) {
		try {
			data.password = await bcrypt.hash(
				data.password,
				10,
			);
			const user = await this.UserRepository.create(
				data,
			);
			return user;
		} catch (error) {
			console.log(
				"some error on services layer",
				error,
			);
			throw error;
		}
	}

	async login(data) {
		try {
			const user =
				await this.UserRepository.getByEmail(
					data.email,
				);
			const isMatchPassword = bcrypt.compare(
				data.password,
				user.password,
			);
			if (!isMatchPassword) {
				throw new Error("invalid password");
			}

			// check the role
			if (req.body.role !== user.role) {
				throw new Error(
					"Account doesn't exist with current role",
				);
			}

			const { password, ...response } = user;
			return response;
		} catch (error) {
			console.log(
				"some thing wrong on services layer",
				error,
			);
			throw error;
		}
	}

	async updateUser(data) {
		try {
			const { userId } = req.user;
			const file = req.file;

			const user = await this.UserRepository.getById(
				userId,
			);
			const skillsArray = skills.split(",");

			// cloudinary ayega idhar

			// update skills array in user document
			user.skills = skillsArray;
			user.fullName = data.fullName;
			user.email = data.email;
			user.phoneNumber = data.phoneNumber;
			user.profile.bio = data.bio;
			user.profile.skills = skillsArray;

			// update user document
			const updatedUser = await user.save();

			return updatedUser;
		} catch (error) {
			console.log(
				"some thing wrong on services layer",
				error,
			);
			throw error;
		}
	}
}

module.exports = UserServices;
