const express = require('express');

const rootdir = require('../utils/path');

const path = require('path');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='number' name='amount'><button>Add Product</button></form>")
    // res.sendFile(path.join(__dirname,"../","views","add-product.html"));
    res.sendFile(path.join(rootdir,"views","add-product.html"));
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;