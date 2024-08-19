const { StatusCodes } = require("http-status-codes");
const { CompanyRepository } = require("../repository");
const ErrorHandler = require("../utils/error");

class CompanyServices {
	constructor() {
		this.companyRepository = new CompanyRepository();
		console.log(this.companyRepository);
	}

	async #findCompanyByName(name) {
		try {
			const resp = await company.find({ name });
			return resp;
		} catch (error) {
			console.log(
				"some thing wrong with with findCompanyByName",
			);
			throw error;
		}
	}

	async registerCompany(data, userId) {
		try {
			const company =
				await this.companyRepository.creates({
					name: data.companyName,
					userId,
				});
			return company;
		} catch (error) {
			console.log(
				"some thing wrong with registerCompany",
				error,
			);
			console.log(error);

			throw new ErrorHandler(
				false,
				"Couldn't register company",
				StatusCodes.BAD_REQUEST,
				error,
				null,
			);
		}
	}

	// we get the company by two ways
	// 1. by user id
	// 2. by req.params
	async getCompanyByUserId(userId) {
		try {
			const company =
				await this.companyRepository.getByUserId(
					userId,
				);
			return company;
		} catch (error) {
			console.log(
				"some thing wrong with getCompany",
				error,
			);
			throw error;
		}
	}

	async getCompanyUsingCompanyId(id) {
		try {
			const company = await this.companyRepository.getById(id);
			console.log(company);
			
			return company;
		} catch (error) {
			console.log(
				"some thing wrong with getCompany",
				error,
			);
			throw error;
		}
	}

	async updateCompanyDetail(data, userGetIdByParams) {
		try {
			const file = req.file;
			// idhar cloudinary ayega

			const company = await this.update(
				userGetIdByParams,
				{ data },
			);
			if (!company) {
				throw new ErrorHandler(
					false,
					"Company not found",
					StatusCodes.NOT_FOUND,
					"company not found",
					null,
				);
			}

			return company;
		} catch (error) {
			throw new ErrorHandler(
				false,
				error.messsage,
				StatusCodes.BAD_REQUEST,
				error,
				null,
			);
		}
	}
}

module.exports = CompanyServices;
