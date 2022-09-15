// Income  Statement router

// Applications :
// (i) to create income statement pdf --- TOCHANGE

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// IncomeStatementRouter           ---- TOCHANGE
const annBudRouter = express.Router();

// Middleware
annBudRouter.use(cors());
annBudRouter.use(bodyparser.urlencoded({ extended: true }));
annBudRouter.use(bodyparser.json());

annBudRouter.get("/", (req, res) => {
	console.log("annBudRouter Get Request");
	res.send("annBudRouter got your get request");
});

annBudRouter.post("/", (req, res) => {
	console.log("annBudRouter Post Request");
	res.send(`annBudRouter got your post request \nValue got :=>  ${req.body}`);
});

module.exports = annBudRouter;
