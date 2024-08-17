const {
	JobServices
} = require("../services");

const jobServices = new JobServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/register
// @ACCESS: public
const createJob = async (req, res, next) => {};

module.exports = { createJob };
