const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/html"});
response.write("<h1>Hello World!</h1>");
response.end();
});
server.listen(port);
