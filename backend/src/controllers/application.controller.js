const { ApplicationServices } = require("../services");

const applicationServices = new ApplicationServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/register
// @ACCESS: public
const createJobApplication = async (req, res, next) => {};

module.exports = { createJobApplication };
