const { Application } = require("../models");

class ApplicationRepository {
	async creates(data) {
		try {
			const resp = await Application.create(data);
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
			const resp = await Application.find(data);
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
			const resp = await Application.find({});
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
			const resp =
				await Application.findByIdAndUpdate(
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

	async findApplicationBasedOnUserIdAndJobId(
		userId,
		jobId,
	) {
		try {
			const resp = await Application.findOne({
				job: jobId,
				application: userId,
			});
			return resp;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ApplicationRepository;
