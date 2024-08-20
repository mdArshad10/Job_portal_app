const { StatusCodes } = require("http-status-codes");
const {
	ApplicationRepository,
	JobRepository,
} = require("../repository");
const ErrorHandler = require("../utils/error");

class ApplicationServices {
	constructor() {
		this.applicationRepository =
			new ApplicationRepository();
		this.jobRepository = new JobRepository();
	}

	async applyForNewJob(userId, jobId) {
		try {
			const existingApplication =
				await this.applicationRepository.findApplicationBasedOnUserIdAndJobId(
					userId,
					jobId,
				);
			if (existingApplication) {
				throw new ErrorHandler(
					StatusCodes.CONFLICT,
					"You have already applied for this job",
				);
			}
			let job = await this.jobRepository.findJobById(
				jobId,
			);
			if (!job) {
				throw new ErrorHandler(
					false,
					"Job not found",
					StatusCodes.CONFLICT,
				);
			}
			const response =
				await this.jobRepository.creates({
					job: jobId,
					application: userId,
				});
			const data = {
				...job,
				applications: [
					...job.applications,
					response._id,
				],
			};

			await this.jobRepository.update(jobId, data);
			return response;
		} catch (error) {
			console.log(
				"some error on applyForNewJob",
				error,
			);
			throw error;
		}
	}
}

module.exports = ApplicationServices;
