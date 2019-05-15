// creating server without express.js
var http = require("http");
var port = 9000;

http.createServer(function(req, resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write("<html><body>Hello audience!!</body></html>");
    resp.end();
}).listen(port);