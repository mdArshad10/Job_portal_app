const cloudinary = require("cloudinary").v2;
const fs = require("node:fs/promises");
const {
	cloudinaryApiKey,
	cloudinaryApiSecretKey,
	cloudinaryCloudName,
} = require("../constant.js");

cloudinary.config({
	cloud_name: cloudinaryCloudName,
	api_key: cloudinaryApiKey,
	api_secret: cloudinaryApiSecretKey, // Click 'View API Keys' above to copy your API secret
});

const fileUploadInCloudinary = async filePath => {
	try {
		if (!filePath) return null;
		const response = await cloudinary.uploader.upload(
			filePath,
			{
				resource_type: "auto",
			},
		);
		console.log("file uploaded successfully");
		await fs.unlink(filePath);

		return response.url;
	} catch (error) {
		await fs.unlink(filePath);
		return null;
	}
};

module.exports = fileUploadInCloudinary;
