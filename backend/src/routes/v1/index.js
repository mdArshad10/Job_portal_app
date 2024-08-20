const { Router } = require("express");
const {
	userRegisterDataValidate,
	userLoginDataValidate,
	userUpdateDataValidate,
	companyRegisterDataValidate,
	getCompanyByIdDataValidate,
	updateCompanyDataValidate,
	createJobDataValidate,
} = require("../../middlewares/Input-validator.js");

const {
	loginTheUser,
	logoutTheUser,
	registerTheUser,
	updateTheProfile,
} = require("../../controllers/user.controller.js");

const {
	createCompany,
	getCompany,
	getCompanyById,
	updateCompanyDetails,
} = require("../../controllers/company.controller.js");

const {
	createJob,
	getAllJobs,
	adminCreatedJobs,
	getJobByJobId,
} = require("../../controllers/job.controller.js");

const upload = require("../../middlewares/multer.js");
const {
	isAuthenticated,
} = require("../../middlewares/isAuthenticated.js");

const router = Router();

const fileUploadForAvatar = upload.single("file");
const fileUploadForResume = upload.single("resume");

// ======== user routes ========
router
	.route("/register")
	.post(
		fileUploadForAvatar,
		userRegisterDataValidate,
		registerTheUser,
	);

router
	.route("/login")
	.post(userLoginDataValidate, loginTheUser);

router.route("/logout").get(isAuthenticated, logoutTheUser);

router
	.route("/profile/update")
	.put(
		fileUploadForResume,
		isAuthenticated,
		userUpdateDataValidate,
		updateTheProfile,
	);

// ================= user routes End ==========

// ======== Company routes ========
router
	.route("/company/register")
	.post(
		companyRegisterDataValidate,
		isAuthenticated,
		createCompany,
	);
// get company by the user id
router.route("/company").get(isAuthenticated, getCompany);

// get company by company id
router
	.route("/company/:id")
	.get(
		getCompanyByIdDataValidate,
		isAuthenticated,
		getCompanyById,
	)
	// update the company
	.put(
		updateCompanyDataValidate,
		isAuthenticated,
		updateCompanyDetails,
	);

// ======== Company routes End ========

// ======== Application routes ========


// ======== Application routes End ========

// ======== Job routes ========
router
	.route("/job/create")
	.post(isAuthenticated, createJob);

router.route("/jobs").get(isAuthenticated, getAllJobs);

router
	.route("/jobs/:id")
	.get(isAuthenticated, getJobByJobId);

router
	.route("/jobs/admin")
	.get(isAuthenticated, adminCreatedJobs);

// ======== Job routes End ========

module.exports = router;
