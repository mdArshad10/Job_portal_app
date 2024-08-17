const { Job } = require("../models");
const { createIndexes } = require("../models/user.model");
const { CrudRepository } = require("../repository");

class JobServices extends CrudRepository {
	constructor() {
		const job = new Job();
		super(job);
	}

	async #findFilterJob(query) {
		try {
			const jobs = await job
				.find(query)
				.populate({ path: "company" })
				.sort({ createdAt: -1 });
			return jobs;
		} catch (error) {
			console.log("some thing wrong with job filter");
			throw error;
		}
	}

	async #getAdminCreatedJob(adminId) {
		try {
			const jobs = await job.find({
				created_by: adminId,
			});
			return jobs;
		} catch (error) {
			console.log(
				"some thing worng with admin job creationg",
			);
			throw error;
		}
	}

	async postJob(data, userId) {
		// data validation and data sanitization
		try {
			const {
				title,
				description,
				requirements,
				location,
				jobType,
				position,
				company,
				salary,
				experience,
				created_by,
			} = data;

			const jobs = await this.create({
				title,
				description,
				requirements: requirements.split(","),
				location,
				jobType,
				position,
				company,
				salary: Number(salary),
				experienceLevel: experience,
				created_by: userId,
			});
			return jobs;
		} catch (error) {
			throw error;
		}
	}

	async getAllJobs(req) {
		try {
			const keyword = req.query.keyword || "";
			const query = {
				$or: [
					{
						title: {
							$regex: keyword,
							$options: "i",
						},
					},
					{
						description: {
							$regex: keyword,
							$options: "i",
						},
					},
				],
			};
			const jobs = await this.#findFilterJob(query);
			return jobs;
		} catch (error) {
			console.log("some wrong with get all jobs");
			throw error;
		}
	}

	async getJobByUsingJobId(jobId) {
		try {
			const response = await this.getById(jobId);
			return response;
		} catch (error) {
			throw error;
		}
	}

	async getJobWhichIsCreateByAdmin(adminId) {
		try {
			const jobs = await this.#getAdminCreatedJob(
				adminId,
			);
			return jobs;
		} catch (error) {
			console.log(
				"some thing with admin job creation",
			);
			throw error;
		}
	}
}

module.exports = JobServices;
