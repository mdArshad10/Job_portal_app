const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");
const mongoSanitize = require("express-mongo-sanitize");
const { corsOrigin, port } = require("./constant.js");
const apiRoutes = require("./routes");
const dbConnection = require("./config/db.js");

// const { rateLimit } = require("express-rate-limit");

// app object
const app = express();

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// 	standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE"],
	}),
);
app.use(mongoSanitize());

// Apply the rate limiting middleware to all requests.
// app.use(limiter);
app.disable("x-powered-by");

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
	await dbConnection();
});
