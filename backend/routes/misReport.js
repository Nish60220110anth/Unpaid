// Income  Statement router

// Applications :
// (i) to create income statement pdf --- TOCHANGE

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// IncomeStatementRouter           ---- TOCHANGE
const misRouter = express.Router();

// Middleware
misRouter.use(cors());
misRouter.use(bodyparser.urlencoded({ extended: true }));
misRouter.use(bodyparser.json());

misRouter.get("/", (req, res) => {
	console.log("Mis Reports Get Request");
	res.send("MisRouter got your get request");
});

misRouter.post("/", (req, res) => {
	console.log("Mis Reports Post Request");
	res.send(`MisRouter got your post request \nValue got :=>  ${req.body}`);
});

module.exports = misRouter;
