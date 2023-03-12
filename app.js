const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');

const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouter);

app.use(shopRouter);

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found!!</h1>')
    res.status(404).sendFile(path.join(__dirname,"views","error.html"));
})

app.listen(3000);