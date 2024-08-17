const { CompanyServices } = require("../services");

const companyServices = new CompanyServices();

// @DESCRIPTION: this is used for the registration the user
// @METHOD: [POST]      /api/v1/register
// @ACCESS: public
const createCompany = async (req, res, next) => {};

module.exports = { createCompany };
