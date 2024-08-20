const { body, param } = require("express-validator");
const {
	CompanyRepository,
	UserRepository,
	JobRepository,
} = require("../repository");

const user = new UserRepository();
const company = new CompanyRepository();
const job = new JobRepository();

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
		})
		.escape(),
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

const companyRegisterDataValidate = [
	body("companyName")
		.trim()
		.notEmpty()
		.withMessage("Company Name must be required")
		.custom(async value => {
			try {
				const existingCompany =
					await company.getByData({
						companyName: value,
					});

				console.log(existingCompany);

				if (existingCompany.length == 0) {
					throw new Error(
						"Company already exist",
					);
				}
			} catch (error) {
				throw new Error(error);
			}
		})
		.escape(),
];

const getCompanyByIdDataValidate = [
	param("id")
		.notEmpty()
		.withMessage("company id is must be required")
		.isMongoId()
		.withMessage("invalid company id")
		.escape(),
];

const updateCompanyDataValidate = [
	body("name")
		.trim()
		.optional()
		.isLength({ min: 2 })
		.withMessage(
			"Company Name must be at least 2 characters long",
		)
		.custom(async value => {
			try {
				const existingCompany =
					await company.getCompanyByName(value);
				if (existingCompany) {
					throw new Error(
						"Company already exist",
					);
				}
			} catch (error) {
				throw new Error(
					"some thing wrong with input-validator",
				);
			}
		})
		.escape(),

	body("description").trim().optional().escape(),

	body("location").trim().optional().escape(),

	body("website").trim().optional().escape(),

	body("location").trim().optional().escape(),

	param("id")
		.notEmpty()
		.withMessage("company id is must be required")
		.isMongoId()
		.withMessage("invalid user Id")
		.custom(async value => {
			try {
				const existingCompany =
					await company.getById(value);
				if (!existingCompany) {
					throw new Error("Company not found");
				}
			} catch (error) {
				throw new Error(
					"some thing wrong with input-validator",
				);
			}
		})
		.escape(),
];

const createJobDataValidate = [
	body("title")
		.trim()
		.notEmpty()
		.withMessage("Title is required")
		.escape(),
	body("description")
		.trim()
		.notEmpty()
		.withMessage("Description is required")
		.escape(),
	body("requirements")
		.trim()
		.notEmpty()
		.withMessage("Requirements is required")
		.escape(),

	body("salary")
		.trim()
		.notEmpty()
		.withMessage("Salary is required")
		.escape(),

	body("location")
		.trim()
		.notEmpty()
		.withMessage("Location is required")
		.escape(),
	body("jobType")
		.trim()
		.notEmpty()
		.withMessage("Job Type is required")
		.isIn(["full-time", "part-time", "internship"])
		.withMessage(
			"Job Type must be either full-time, part-time or internship",
		)
		.escape(),
	body("experienceLevel")
		.trim()
		.notEmpty()
		.withMessage("Experience Level is required")
		.escape(),
	body("position")
		.trim()
		.notEmpty()
		.withMessage("position must be required")
		.escape(),
];

const applyJobDataValidate = [
	param("id")
		.notEmpty()
		.withMessage("Job Id is required")
		.isMongoId()
		.withMessage("job id is invalid")
		.escape(),
];

module.exports = {
	userRegisterDataValidate,
	userLoginDataValidate,
	userUpdateDataValidate,
	companyRegisterDataValidate,
	getCompanyByIdDataValidate,
	updateCompanyDataValidate,
	createJobDataValidate,
	applyJobDataValidate,
};
