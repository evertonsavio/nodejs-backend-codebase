const http = require ('http');

const server = http.createServer ((req, res) => {
  console.log (req);
});

server.listen (3000);

/* function requestListener(req, res){
    ......}
http.createServer(requestListener);

http.createServer(function(req, res){
    ......
}); */
