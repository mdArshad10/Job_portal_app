const { Job } = require("../models");
class JobRepository {
	async creates(data) {
		try {
			const resp = await Job.create(data);
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
			const resp = await Job.find(data);
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
			const resp = await Job.find({});
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
			const resp = await Job.findByIdAndUpdate(
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

module.exports = JobRepository;
