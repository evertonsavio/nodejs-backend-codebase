const http = require ('http');
const fs = require ('fs');

const server = http.createServer ((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write ('<html>');
    res.write ('<html><title>Enter Message</title></html>');
    res.write (
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write ('</html>');
    return res.end ();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on ('data', chunk => {
      console.log (chunk);
      body.push (chunk);
    }); //buffer chunk ready
    return req.on ('end', () => {
      const parsedBody = Buffer.concat (body).toString ();
      console.log (parsedBody);
      const message = parsedBody.split ('=')[1];
      fs.writeFile ('04_message.txt', message, err => {
        //3 argument is a callback, that is a function that is executed when is done.
        res.statusCode = 302;
        res.setHeader ('Location', '/');
        return res.end ();
      });
    });
  }
  res.setHeader ('Content-Type', 'text/html');
  res.write ('<html>');
  res.write ('<html><title>My First Page</title></html>');
  res.write ('<body><h1>Hello from Node.js Server</h1></body>');
  res.write ('</html>');
  res.end ();
});

server.listen (3000);

/* function requestListener(req, res){
    ......}
http.createServer(requestListener);

http.createServer(function(req, res){
    ......
}); */
