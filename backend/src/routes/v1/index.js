const { Router } = require("express");
const registerValidator = require("../../middlewares/user-validator.js");
const upload = require("../../middlewares/multer.js");
const router = Router();

const fileupload = upload.single("file");
// ======== user routes ========
// router.route('/register').post(registerValidator,)

module.exports = router;
