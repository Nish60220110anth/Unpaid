const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const util = require('./../controller/utils')

const FILE_NAME = "index.js"
const ROUTER_NAME = "indexBaseRouter"

const { INVALID_URL } = require('./../controller/templ-utils/templ-schema')

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

// Status codes
// INVALID URL :400

function DebugText(reqType) {
	util.RDebugText(FILE_NAME, reqType, ROUTER_NAME)
}

const indexBaseRouter = express.Router();

indexBaseRouter.use(cors());
indexBaseRouter.use(bodyparser.json());

indexBaseRouter.get("/", (req, res) => {
	DebugText('GET');
	res.status(400).render('invalid-loc', INVALID_URL("/"))
})

indexBaseRouter.post("/", (req, res) => {
	DebugText('POST');
	res.status(400).render('invalid-loc', INVALID_URL("/"))
})

indexBaseRouter.patch("/", (req, res) => {
	DebugText('PATCH');
	res.status(400).render('invalid-loc', INVALID_URL("/"))
})

indexBaseRouter.delete("/", (req, res) => {
	DebugText('DELETE');
	res.status(400).render('invalid-loc', INVALID_URL("/"))
})


// catch 404 and forward to error handler
indexBaseRouter.use(function (req, res, next) {
	next(createError(404));
});

// error handler
indexBaseRouter.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.indexBaseRouter.get("env") === "development" ? err : {};
	res.status(500).render('invalid-loc',INVALID_URL("/"))
});

module.exports = indexBaseRouter;
