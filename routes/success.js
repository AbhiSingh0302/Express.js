const express = require('express');

const rootdir = require('../utils/path');

const path = require('path');

const router = express.Router();

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","success.html"))
})

module.exports = router;