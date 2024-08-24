const { UserRepository } = require("../repository");
const bcrypt = require("bcrypt");
const fileUploadInCloudinary = require("../utils/cloudinary.js");
const ErrorHandler = require("../utils/error.js");
const { StatusCodes } = require("http-status-codes");

class UserServices {
	constructor() {
		this.UserRepository = new UserRepository();
	}

	async register(req) {
		try {
			const {
				fullName,
				email,
				password,
				phoneNumber,
				role,
			} = req.body;
			const hashedpassword = await bcrypt.hash(
				password,
				10,
			);
			// Profile upload karna hai

			const fileUploadResponse =
				await fileUploadInCloudinary(
					req.file?.path,
				);

			if (!fileUploadResponse) {
				throw new ErrorHandler(
					false,
					"file is not upload",
					StatusCodes.BAD_REQUEST,
				);
			}

			const data = {
				fullName,
				email,
				password: hashedpassword,
				phoneNumber,
				role,
				profile: {
					profilePhoto: fileUploadResponse,
				},
			};

			const user = await this.UserRepository.create(
				data,
			);
			return user;
		} catch (error) {
			console.log(error);

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
			const isMatchPassword = await bcrypt.compare(
				data.password,
				user.password,
			);
			console.log(isMatchPassword);

			if (!isMatchPassword) {
				throw new Error("invalid password");
			}

			// check the role
			if (data.role !== user.role) {
				throw new Error(
					"Account doesn't exist with current role",
				);
			}

			return user;
		} catch (error) {
			console.log(
				"some thing wrong on services layer",
				error,
			);
			throw error;
		}
	}

	async getUser(userId) {
		try {
			const user = await this.UserRepository.getById(
				userId,
			);
			if(!user) {
				throw new ErrorHandler(false, "User not found", StatusCodes.BAD_REQUEST);
			}
			return user;
		} catch (error) {
			console.log("some thing wrong with get user");
			throw error;
		}
	}

	async updateUser(req) {
		try {
			const {
				fullName,
				email,
				phoneNumber,
				bio,
				skills,
			} = req.body;
			const userId = req.user;

			console.log(req.file);

			const user = await this.UserRepository.getById(
				userId,
			);
			const skillsArray = skills.split(",");

			// cloudinary ayega idhar
			const resumeUploadResponse =
				await fileUploadInCloudinary(
					req.file?.path,
				);

			if (!resumeUploadResponse) {
				throw new ErrorHandler(
					false,
					"resume is not upload",
					StatusCodes.BAD_REQUEST,
				);
			}

			// update skills array in user document
			user.skills = skillsArray;
			user.fullName = fullName;
			user.email = email;
			user.phoneNumber = phoneNumber;
			user.profile.bio = bio;
			user.profile.skills = skillsArray;
			user.profile.resume = resumeUploadResponse;
			user.profile.resumeOriginalName = `${fullName}-resume-${user.updatedAt.toLocaleDateString()}`;

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
