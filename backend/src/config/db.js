const mongoose = require("mongoose");
const { databaseName, mongo_url } = require("../constant.js");

const dbConnection = async () => {
  try {
    const dbInstance = await mongoose.connect(`${mongo_url}/${databaseName}`);
    console.log(`the database connected at => ${dbInstance.connection.port}`);
  } catch (error) {
    console.log("some error on database connection", error);
    process.exit(1);
  }
};

module.exports = dbConnection;
