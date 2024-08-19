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
const {isAuthenticated} = require("../../middlewares/isAuthenticated.js")


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

router.route("/logout").get(isAuthenticated, logoutTheUser);

router
	.route("/profile/update")
	.put(isAuthenticated, updateTheProfile);

module.exports = router;
