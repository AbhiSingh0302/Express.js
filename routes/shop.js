const express = require('express');

const rootdir = require('../utils/path');

const path = require('path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    // res.send("<h1>Hello from nodejs</h1>");
    // res.sendFile(path.join(__dirname,"../","views","shop.html"));
    res.sendFile(path.join(rootdir,"views","shop.html"));
})

module.exports = router;