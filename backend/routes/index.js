var express = require("express");
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function(req, res) {
	res.send("Black Lives matter");
});

module.exports = indexRouter;
