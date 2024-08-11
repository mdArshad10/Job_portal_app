const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
	{
		job: {
			type: mongoose.Schema.ObjectId,
			ref: "Job",
		},
		application: {
			type: mongoose.Schema.ObjectId,
			ref: "Application",
		},
		status: {
			type: String,
			enum: ["pending", "accepted", "rejected"],
			default: "pending",
		},
	},
	{ timestamps: true },
);

const Application = mongoose.model(
	"Application",
	applicationSchema,
);

module.exports = Application;
