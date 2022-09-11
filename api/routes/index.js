var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
  console.log("Base Router Get Request");
  res.send("Base Router Get Request Response");
})

module.exports = router;
