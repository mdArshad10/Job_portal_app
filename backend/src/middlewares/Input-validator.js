const { body } = require("express-validator");
const { UserRepository } = require("../repository");

const user = new UserRepository();

const userRegisterDataValidate = [
	body("fullName")
		.trim()
		.notEmpty()
		.withMessage("Full Name is required")
		.isLength({ min: 2 })
		.withMessage(
			"Full Name must be at least 2 characters long",
		)
		.escape(),

	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Must be a valid email address")
		.normalizeEmail()
		.custom(async value => {
			const existingUser = await user.getByEmail(
				value,
			);
			if (existingUser) {
				throw new Error("E-mail already in use");
			}
		}),
	body("password")
		.trim()
		.notEmpty()
		.withMessage("Password is required")
		.isLength({ min: 8, max: 20 })
		.withMessage(
			"Password must be between 8 and 20 characters long",
		)
		.matches(/[a-z]/)
		.withMessage(
			"Password must contain at least one lowercase letter",
		)
		.matches(/[A-Z]/)
		.withMessage(
			"Password must contain at least one uppercase letter",
		)
		.matches(/[0-9]/)
		.withMessage(
			"Password must contain at least one number",
		)
		.matches(/[!@#$%^&*]/)
		.withMessage(
			"Password must contain at least one special character",
		)
		.escape(),

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
];

const userLoginDataValidate = [
	body("email")
		.trim()
		.notEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Must be a valid email address")
		.normalizeEmail()
		.custom(async value => {
			const existingUser = await user.getByEmail(
				value,
			);
			if (!existingUser) {
				throw new Error("E-mail is not valid");
			}
		}),

	body("password")
		.trim()
		.notEmpty()
		.isLength({ min: 8, max: 20 })
		.withMessage(
			"Password must be between 8 and 20 characters long",
		)
		.matches(/[a-z]/)
		.withMessage(
			"Password must contain at least one lowercase letter",
		)
		.matches(/[A-Z]/)
		.withMessage(
			"Password must contain at least one uppercase letter",
		)
		.matches(/[0-9]/)
		.withMessage(
			"Password must contain at least one number",
		)
		.matches(/[!@#$%^&*]/)
		.withMessage(
			"Password must contain at least one special character",
		)
		.escape(),

	body("role")
		.trim()
		.notEmpty()
		.withMessage("Role is required")
		.isIn(["student", "recruiter"])
		.withMessage(
			"Role must be either student or recruiter",
		),
];

const userUpdateDataValidate = [
	body("fullName")
		.trim()
		.isLength({ min: 2 })
		.withMessage(
			"Full Name must be at least 2 characters long",
		)
		.escape(),

	body("email")
		.trim()
		.isEmail()
		.withMessage("Must be a valid email address")
		.normalizeEmail()
		.escape(),

	body("phoneNumber")
		.trim()
		.isMobilePhone()
		.withMessage("Must be a valid phone number")
		.escape(),

	body("bio")
		.trim()
		.isLength({ max: 300 })
		.withMessage(
			"Bio must be a length of max 300 characters",
		)
		.escape(),

	body("skills").trim().escape(),
];

module.exports = {
	userRegisterDataValidate,
	userLoginDataValidate,
	userUpdateDataValidate,
};
