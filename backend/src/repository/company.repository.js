const { Company } = require("../models");
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

	async getById(id) {
		try {
			const resp = await Company.findById(id);
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}

	async getByUserId(userId) {
		try {
			const resp = await Company.find({ userId });
			return resp;
		} catch (error) {
			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}

	async getCompanyByName(companyName) {
		try {
			const resp = await Company.findOne({
				name: companyName,
			});
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

	async updateDetail(id, data) {
		try {
			console.log(data);
			
			const resp = await Company.findByIdAndUpdate(
				id,
				{
					$set: {
						description: data.description,
						website: data.website,
						location: data.location,
						logo: data.logo,
					},
				},
				{ new: true },
			);
			console.log(
				"inside the company repository for updating the detail",
			);

			console.log(resp);

			return resp;
		} catch (error) {
			console.log(error);

			console.log(
				"something wrong on crud repository",
			);
			throw error;
		}
	}
}

module.exports = CompanyRepository;
