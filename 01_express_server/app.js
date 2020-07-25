const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middlewe');
  next();
});

app.use((req, res, next) => {
  console.log('Another middlewe');
});

const server = http.createServer(app);

server.listen(3000);
