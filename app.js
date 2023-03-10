const express = require('express');

const app = express();


app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button>Add Product</button></form>")
})

app.use('/product',(req,res,next)=>{
    res.send("<h1>Product Page</h1>");
})

app.use('/',(req,res,next)=>{
    res.send("<h1>Hello from nodejs</h1>");
})

app.listen(3000);