const {Company} = require('../models');
class CompanyRepository {
	async creates(data) {
		try {
			const resp = await Company.create(data);
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}

	async getByData(data) {
		try {
			const resp = await Company.find(data);
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}

	async getAll() {
		try {
			const resp = await Company.find({});
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}

	async update(id, data) {
		try {
			const resp = await Company.findByIdAndUpdate(
				id,
				data,
				{ new: true },
			);
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}
}

module.exports = CompanyRepository;
