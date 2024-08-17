const { Application } = require("../models");
const { CrudRepository } = require("../repository");

class ApplicationServices extends CrudRepository {
	constructor() {
		const application = new  Application();
		super(application);
	}
}

module.exports = ApplicationServices;
