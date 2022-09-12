var express = require('express');
const router = express.Router()

// /user/?=credentials -> check credential validity

// User Router 

// Middleware for all CRUD's
router.use("/",(req,res,next)=>{
    console.log("Ledger Router Get Request - Start Middleware");
    next();
})

router.get("/",(req,res,next)=>{
    console.log("Ledger Router Get Request");
    res.json({
        "result" : "result data"
    })
    next();
})

// Post Middle ware
router.use("/",(req,res,next)=>{
    console.log("Ledger Router - Post Middleware Start");
})

// Middleware - end for all CRUD's
router.use("/",(req,res,next)=>{
    console.log("Ledger Router Get Request - End Middleware");
    // next();
})

module.exports = router;