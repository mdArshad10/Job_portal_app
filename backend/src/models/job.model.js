const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "job title is required"],
		},
		description: {
			type: String,
			required: [true, "job description is required"],
		},
		requirements: {
			type: String,
			required: [
				true,
				"job requirements is required",
			],
		},
		salary: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			required: [true, "job location is required"],
		},
		jobType: {
			type: String,
			required: [true, "job types is required"],
		},
		experienceLevel: {
			type: Number,
			required: true,
		},
		position: {
			type: String,
			required: [true, "job position is required"],
		},
		company: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Company",
				required: true,
			},
		],
		created_by: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		applications: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Application",
			},
		],
	},
	{ timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
