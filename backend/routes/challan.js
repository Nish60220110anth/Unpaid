// Letter of credit router

// Applications :
// (i) to create loc pdf

// Requirements
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const htmlpdf = require("html-pdf");

// LocRouter
const challanRouter = express.Router();

// Templates
const pdfTemplate = require("../views/template/challan");

// Per file Variables
var file_count = 1;
const gen_file_name = "challan";

// Middleware
challanRouter.use(cors());
challanRouter.use(bodyparser.urlencoded({ extended: true }));
challanRouter.use(bodyparser.json());

// POST - to make server to genarate pdf
// GET - after making post request - again we need to ask the server to give the pdf generated by it

// Creates pdf
// notifies frontend that he created the pdf
challanRouter.post("/create", (req, res) => {
  //console.log(`${req.body.name}`);
  console.log("Post Request to generate file -> From Backend");
  htmlpdf
    .create(pdfTemplate(req.body), {})
    .toFile(`${gen_file_name}_${file_count}.pdf`, (err) => {
      if (err) {
        Promise.reject();
      }
      res.send(Promise.resolve());
    });
});

// He gives the pdf which is created by the createpdf
challanRouter.get("/get", (_req, res) => {
  const dirpath = __dirname;
  var path = "",
    lastIndex = 0;
  for (var i = 0; i < dirpath.length; i++) {
    if (dirpath[i] == "\\") {
      lastIndex = i;
    }
  }
  path = dirpath.substring(0, lastIndex);
  res.sendFile(`${path}/${gen_file_name}_${file_count}.pdf`);
  file_count++;
});

module.exports = challanRouter;
