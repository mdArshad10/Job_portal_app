const { config } = require("dotenv");

config({
  path: ".env",
});

const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;
const corsOrigin = process.env.CORE_ORIGIN;
const databaseName = "job_portal";
const nodeEnv = process.env.NODE_ENV;
const accessSecretKey = process.env.ACCESS_SECRET_KEY;

module.exports = {
	port,
	mongo_url,
	corsOrigin,
	databaseName,
	nodeEnv,
	accessSecretKey,
};
