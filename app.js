const http = require('http');

const express = require('express');

const app = express();

app.use((res,req,next)=>{
    console.log("Inside middleware 1!!");
    next();
})

app.use((res,req,next)=>{
    console.log("Inside middleware 2!!");
})

const server = http.createServer(app);

server.listen(3000);