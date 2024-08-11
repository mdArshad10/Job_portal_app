const { Router } = require("express");
const expressRouters = require("./v1/index.js");

const router = Router();

router.use("/v1", expressRouters);

module.exports = router;
