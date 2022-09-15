// Income  Statement router

// Applications :
// (i) to create income statement pdf --- TOCHANGE

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// IncomeStatementRouter           ---- TOCHANGE
const hefaRouter = express.Router();

// Middleware
hefaRouter.use(cors());
hefaRouter.use(bodyparser.urlencoded({ extended: true }));
hefaRouter.use(bodyparser.json());

hefaRouter.get("/", (req, res) => {
	console.log("HEFA Storage Get Request");
	res.send("HEFARouter got your get request");
});

hefaRouter.post("/", (req, res) => {
	console.log("HEFA Storage Post Request");
	res.send(`HEFARouter got your post request \nValue got :=>  ${req.body}`);
});

module.exports = hefaRouter;
