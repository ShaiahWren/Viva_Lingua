const http = require("http");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;


const express = require('express');
const es6Renderer = require("express-es6-template-engine");
const app = express();

const server = http.createServer(app);



server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});

