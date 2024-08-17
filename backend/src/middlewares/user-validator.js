const { body } = require("express-validator");

const userRegisterDataValidate = [
	body("fullName")
		.trim()
		.notEmpty()
		.withMessage("Full Name is required")
		.isLength({ min: 2 })
		.withMessage(
			"Full Name must be at least 2 characters long",
		),

	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Must be a valid email address")
		.normalizeEmail(),

	body("password")
		.trim()
		.notEmpty()
		.withMessage("Password is required")
		.isLength({ min: 6 })
		.withMessage(
			"Password must be at least 6 characters long",
		),

	body("phoneNumber")
		.trim()
		.notEmpty()
		.withMessage("Phone number is required")
		.isMobilePhone()
		.withMessage("Must be a valid phone number"),

	body("role")
		.trim()
		.notEmpty()
		.withMessage("Role is required")
		.isIn(["student", "recruiter"])
		.withMessage(
			"Role must be either student or recruiter",
		),

	body("profile.bio").optional().trim().escape(),

	body("profile.skills")
		.optional()
		.isArray()
		.withMessage("Skills should be an array")
		.customSanitizer(skills =>
			skills.map(skill => skill.trim().escape()),
		),

	body("profile.resume").optional().trim(),

	body("profile.resumeOriginalName")
		.optional()
		.trim()
		.escape(),

	body("profile.profilePhoto")
		.optional()
		.trim()
		.isURL()
		.withMessage("Profile photo must be a valid URL"),
];

module.exports={
	userRegisterDataValidate
}