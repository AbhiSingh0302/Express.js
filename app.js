const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer((req,res)=>{
    res.write("<h1>Hello</h1>");
});

server.listen(3000);