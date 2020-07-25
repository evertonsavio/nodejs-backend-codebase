const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middlewe');
  next();
});

app.use((req, res, next) => {
  console.log('Another middlewe');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);
