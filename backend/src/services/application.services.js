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
				await this.applicationRepository.creates({
					job: jobId,
					application: userId,
				});
			const data = {
				...job._doc,
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

	async getAppliedJobs(userId) {
		try {
			const applications =
				await this.applicationRepository.getByData({
					application: userId,
				});
			console.log(!applications);

			if (!applications) {
				throw new Error("Applications not found");
			}
			return applications;
		} catch (error) {
			console.log(error);

			console.log(
				"some thing wrong with getAppliedJobs",
			);
			throw error;
		}
	}

	async getApplicants(jobId) {
		try {
			const jobs =
				await this.jobRepository.findFilterJobPopulate(
					jobId,
				);
			console.log(jobs);
			if (!jobs) {
				throw new ErrorHandler(
					false,
					"Job not found",
					StatusCodes.NOT_FOUND,
				);
			}

			return jobs;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async applicationStatus(status, applicationId) {
		try {
			const applications =
				await this.applicationRepository.update(
					applicationId,
					{ status },
				);
			return applications;
		} catch (error) {
			console.log(
				"some thing wrong with applicationStatus",
				error,
			);
			throw error;
		}
	}
}

module.exports = ApplicationServices;
