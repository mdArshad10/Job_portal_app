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

	async findJobById(id) {
		try {
			const resp = await Job.findById(id);
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
			console.log(data);
			
			const resp = await Job.find(data);
			console.log(resp);
			
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

	async findFilterJob(query) {
		try {
			const jobs = await Job.find(query)
				.populate({ path: "company" })
				.sort({ createdAt: -1 });
			return jobs;
		} catch (error) {
			console.log("some thing wrong with job filter");
			throw error;
		}
	}

	async findFilterJobPopulate(jobId) {
		try {
			const job = await Job.findById(jobId).populate({
				path: "applications",
				options: { sort: { createdAt: -1 } },
				populate: {
					path: "application",
				},
			});
			return job;
		} catch (error) {
			console.log(
				"some error occurred while populating job",
			);
			throw error;
		}
	}
}

module.exports = JobRepository;
