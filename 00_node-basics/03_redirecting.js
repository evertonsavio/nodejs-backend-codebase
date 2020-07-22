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
    fs.writeFileSync ('03_message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader ('Location', '/');
    return res.end ();
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
