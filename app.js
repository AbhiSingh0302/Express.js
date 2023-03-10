const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Inside middleware 1!!");
    next();
})

app.use((req,res,next)=>{
    console.log("Inside middleware 2!!");
    res.send("<h1>Hello from nodejs</h1>");
})

const server = http.createServer(app);

server.listen(3000);