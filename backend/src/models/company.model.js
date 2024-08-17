const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "company name is required"],
			unique: [true, "company name is required"],
		},
		description: {
			type: String,
		},
		website: {
			type: String,
		},
		location: {
			type: String,
		},
		logo: {
			type: String, // url to
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true },
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
