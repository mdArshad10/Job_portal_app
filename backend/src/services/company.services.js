const { Company } = require("../models");
const { CrudRepository } = require("../repository");

class CompanyServices extends CrudRepository {
	constructor() {
		const company = new Company();
		super(company);
	}
}

module.exports = CompanyServices;
