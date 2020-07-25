### Framework Express JS

- http://expressjs.com/en/5x/api.html#app.use

* Alternatives for Express: Vanilla Node.js as in 00_node-basics
* Frameworks -> Adonis.js like Laravel for PHP
* Koa, Sails.js etc

```
npm install --save express
npm install --save body-parser
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

### To send Requests

```
app.use((req, res, next) => {
  console.log('Another middlewe');
  res.send('<h1>Hello from Express</h1>');
});
```

### Subsituir

```
const server = http.createServer(app);
server.listen(3000);

#por simplesmente:

app.listen(3000);
```

### Body Parser

```
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
```
