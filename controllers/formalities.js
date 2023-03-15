const rootdir = require('../utils/path');
const path = require('path');
exports.postSuucess = (req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","success.html"))
};

exports.getContactus = (req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","contactus.html"));
};

exports.postContactus = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
};