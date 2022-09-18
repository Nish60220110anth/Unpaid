var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const challanRouter = require("./routes/challan");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/authenticate");
const bsRouter = require("./routes/bs");
const hefaRouter = require("./routes/hefaStorage");
const emdRouter = require("./routes/emdStorage");
const insRouter = require("./routes/ins");
const locRouter = require("./routes/loc");
const misRouter = require("./routes/misReport");
const annBudRouter = require("./routes/annBud");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter); // --TODO  => Need to implement authentication by passing variables
app.use("/bs", bsRouter); // file
app.use("/emd", emdRouter);
app.use("/hefa", hefaRouter);
app.use("/ins", insRouter); // file
app.use("/loc", locRouter); // file
app.use("/mis", misRouter); // file
app.use("/annb", annBudRouter); //file
app.use("/challan",challanRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

const ROOT_DIR = `${__dirname}`;

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = app;
