const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");
const { corsOrigin, port } = require("./constant.js");
const apiRoutes = require("./routes");

// app object
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api", apiRoutes);
app.use("*", (req, res, next) => {
  res.status(StatusCodes.OK).json({
    data: null,
    message: "page not found",
    success: true,
    error: null,
  });
});

app.listen(port, async () => {
  console.log(`the server is running at port ${port}`);
});
