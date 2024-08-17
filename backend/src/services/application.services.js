const { StatusCodes } = require("http-status-codes");
const { Application } = require("../models");
const { CrudRepository } = require("../repository");
const { JobServices } = require("../services");
const ErrorHandler = require("../utils/error");

class ApplicationServices extends CrudRepository {
	constructor() {
		const application = new Application();
		const jobs = new JobServices();
		super(application);
	}

	async #findApplicationByJobIdOrUserId(jobId, userId) {
		try {
			const response = await this.application.find({
				job: jobId,
				userId: userId,
			});
			return response;
		} catch (error) {
			console.log(
				"some error on findApplicationByJobIdOrUserId",
			);
			throw error;
		}
	}

	async applyForNewJob(data, userId, jobId) {
		try {
			const existingApplication =
				await this.#findApplicationByJobIdOrUserId(
					jobId,
					userId,
				);
			if (!existingApplication) {
				throw new ErrorHandler(
					false,
					"you have already apply for this job",
					StatusCodes.BAD_REQUEST,
				);
			}

			// check the job is present or not by job id
			const job = await this.jobs.getById(userId);
			if (!job) {
				throw new ErrorHandler(
					false,
					"No job found",
					StatusCodes.BAD_REQUEST,
				);
			}
			const newApplication = await this.create({
				job: jobId,
				application: userId,
			});
			job.application.push(newApplication._id);
			await this.job.save();
			return true;
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
