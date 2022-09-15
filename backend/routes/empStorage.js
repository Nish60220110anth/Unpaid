// Income  Statement router

// Applications :
// (i) to create income statement pdf --- TOCHANGE

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// IncomeStatementRouter           ---- TOCHANGE
const empRouter = express.Router();

// Middleware
empRouter.use(cors());
empRouter.use(bodyparser.urlencoded({ extended: true }));
empRouter.use(bodyparser.json());

empRouter.get("/", (req, res) => {
	console.log("Employee Storage Get Request");
	res.send("Employee Storage got your get request");
});

empRouter.post("/", (req, res) => {
	console.log("Employee Storage Post Request");
	res.send(
		`Employee Storage got your post request \nValue got :=>  ${req.body}`
	);
});

module.exports = empRouter;
