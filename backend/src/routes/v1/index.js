const { Router } = require("express");
const {
	userRegisterDataValidate
} = require("../../middlewares/user-validator.js");
const {
	loginTheUser,
	logoutTheUser,
	registerTheUser,
	updateTheProfile,
} = require("../../controllers/user.controller.js");
const upload = require("../../middlewares/multer.js");
const router = Router();

const fileupload = upload.single("file");
// ======== user routes ========
router
	.route("/register")
	.post(userRegisterDataValidate, registerTheUser);

// router.route("/login").post(loginValidator, loginTheUser);

module.exports = router;
