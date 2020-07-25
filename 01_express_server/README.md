### Framework Express JS

- Alternatives for Express: Vanilla Node.js as in 00_node-basics
- Frameworks -> Adonis.js like Laravel for PHP
- Koa, Sails.js etc

```
npm install --save express
```

```
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
```

- Express is all about Middleware. Incomes requests are automatically handler by multiples functions.

* To add middleware use:

```
app.use((req, res, next) => {
  console.log('In the middlewe');
  next();
});

app.use((req, res, next) => {
  console.log('In Another middlewe');
});
```
