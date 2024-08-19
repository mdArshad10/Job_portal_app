const { Router } = require("express");
const {
	userRegisterDataValidate,
	userLoginDataValidate,
	userUpdateDataValidate,
} = require("../../middlewares/Input-validator.js");
const {
	loginTheUser,
	logoutTheUser,
	registerTheUser,
	updateTheProfile,
} = require("../../controllers/user.controller.js");
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

module.exports = router;
