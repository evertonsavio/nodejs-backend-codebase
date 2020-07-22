const http = require ('http');

const server = http.createServer ((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write ('<html>');
    res.write ('<html><title>Enter Message</title></html>');
    res.write (
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write ('</html>');
    return res.end ();
  }
  console.log (req.url, req.method, req.headers);
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
