// Letter of credit Router 

// GET 
// @params 
// 
// <uniqueId:int> (Stored in web server)
//
// POST
// @params 
// 
// <recipient:string> <bank:string> <address:string> <amount:string> <date:string>  
// <subject:string> <attention:string> <valid:string> <addressB:string>
//
// DELETE
// @params 
// 
// !xx
// 
// PATCH
// @params 
//
// !xx
// 
// @id 
// <uniqueId:int> 

// Roles : 
// (i) create pdf
// (ii) send pdf
// (iii) Synchronizes with data router
// (iv) delete pdf

// STATUS CODES
// 200 - Success Operation
// 201 - Success Creation
// 404 - Not found
// 500 - Server Error
// 403 - Forbidden Request

// Requirements
const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyparser = require("body-parser");
const htmlpdf = require("html-pdf");
const util = require("./../../../controller/utils");

// LetterOfCredit Router
const locRouter = express.Router();

// Template
const pdfTemplate = require("../../../views/template/loc");

// Per file Variables
// Not thread safe - Need to mutex guard in further release
var file_count = 0;
const gen_file_name = "letter_of_credit";
const FILE_NAME = "loc.js";
const ROUTER_NAME = "locRouter";

// Middleware
locRouter.use(cors());
locRouter.use(bodyparser.urlencoded({ extended: true }));
locRouter.use(bodyparser.json());

// POST - to make server to genarate pdf
// GET - after making post request - again we need to ask the server to give the pdf generated by it

// Creates pdf
// notifies frontend that it has created the pdf
// Content : req.body

// Client will not about pdf storing in webs server 
locRouter.post("/", (req, res) => {
	const debugText = util.RDebugText(FILE_NAME, "POST", ROUTER_NAME);
    console.log(debugText);
	htmlpdf
		.create(pdfTemplate(req.body), {})
		.toFile(`${gen_file_name}_${file_count}.pdf`, (err) => {
			if (err) {
				console.log(util.ErrorStream(FILE_NAME,"CREATING","loc-pdf not created",err));
				res.send({err:err});
				Promise.reject();
			}
			console.log(util.DebugStream(FILE_NAME,"SUCCESS","loc-pdf created"));
			res.send(Promise.resolve());
		});
});

locRouter.get("/", (req, res) => {
	const debugText = util.RDebugText(FILE_NAME, "GET", ROUTER_NAME);
    console.log(debugText);
	const curr_path = path.normalize(`${__dirname}\\..\\..\\..\\`);
	res.sendFile(`${curr_path}/${gen_file_name}_${file_count}.pdf`);
	console.log(util.DebugStream(FILE_NAME,"SUCCESS","locpdf sent"));
	file_count++;
});

module.exports = locRouter;