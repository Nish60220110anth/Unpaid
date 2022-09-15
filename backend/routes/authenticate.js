// Income  Statement router

// Applications :
// (i) to create income statement pdf --- TOCHANGE

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// IncomeStatementRouter           ---- TOCHANGE
const authRouter = express.Router();

// Middleware
authRouter.use(cors());
authRouter.use(bodyparser.urlencoded({ extended: true }));
authRouter.use(bodyparser.json());

authRouter.get("/", (req, res) => {
	console.log("AuthRouter Get Request");
	res.send("AuthRouter got your get request");
});

authRouter.post("/", (req, res) => {
	console.log("AuthRouter Post Request");
	res.send(`AuthRouter got your post request \nValue got :=>  ${req.body}`);
});

module.exports = authRouter;
