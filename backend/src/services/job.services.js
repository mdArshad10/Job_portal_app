const { JobRepository } = require("../repository");

class JobServices {
	constructor() {
		this.jobRepository = new JobRepository();
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
				salary,
				experience,
				companyId,
			} = data;
			console.log(data);

			const jobs = await this.jobRepository.creates({
				title,
				description,
				requirements: requirements.split(","),
				location,
				jobType,
				position: Number(position),
				company: companyId,
				salary: Number(salary),
				experienceLevel: experience,
				created_by: userId,
			});
			return jobs;
		} catch (error) {
			console.log("something wrong with posting job");

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
			const jobs =
				await this.jobRepository.findFilterJob(
					query,
				);
			if (jobs.length == 0) {
				throw new Error("No jobs found");
			}
			return jobs;
		} catch (error) {
			console.log("some wrong with get all jobs");
			throw error;
		}
	}

	async getJobByUsingJobId(jobId) {
		try {
			console.log(jobId);

			const response =
				await this.jobRepository.findJobById(jobId);
			return response;
		} catch (error) {
			throw error;
		}
	}

	async getJobWhichIsCreateByAdmin(adminId) {
		try {
			const jobs = await this.jobRepository.getByData(
				{ created_by: adminId },
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
