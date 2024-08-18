const { Router } = require("express");
const {
	userRegisterDataValidate,
	userLoginDataValidate
} = require("../../middlewares/Input-validator.js");
const {
	loginTheUser,
	logoutTheUser,
	registerTheUser,
	updateTheProfile,
} = require("../../controllers/user.controller.js");
const upload = require("../../middlewares/multer.js");
const router = Router();

const fileUpload = upload.single("file");
// ======== user routes ========
router
	.route("/register")
	.post(
		fileUpload,
		userRegisterDataValidate,
		registerTheUser,
	);

router
	.route("/login")
	.post(userLoginDataValidate, loginTheUser);

module.exports = router;
