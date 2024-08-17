const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
	{
		job: {
			type: mongoose.Schema.ObjectId,
			ref: "Job",
			required: true,
		},
		application: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
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
