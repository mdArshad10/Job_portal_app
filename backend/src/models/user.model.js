const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: [true, "full Name is required"],
		},
		email: {
			type: String,
			require: [true, "email is required"],
			unique: [true, "Email is already exist"],
		},
		password: {
			type: String,
			required: [true, "password is required"],
		},
		phoneNumber: {
			type: String,
			required: [true, "phone number is required"],
		},
		role: {
			type: String,
			enum: ["student", "recruiter"],
			required: [true, "role is required"],
		},
		profile: {
			bio: { type: String },
			skills: [{ type: String }],
			resume: { type: String }, // url to resume file
			resumeOriginalName: { type: String },
			company: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "Company",
				},
			],
			profilePhoto: {
				type: String,
				default:
					"https://www.freepik.com/premium-vector/man-profile-cartoon_5321649.htm?epik=dj0yJnU9ZmpVU1dhRzFjS2FnNUJBZ1BSeXhnejNFc0dFTUZoTlMmcD0wJm49dGhTYVVFSk94MUEyb2ktNXoyOEdyQSZ0PUFBQUFBR2EtQ1J3",
				required: [
					true,
					"phone number is required",
				],
			},
		},
	},
	{ timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
