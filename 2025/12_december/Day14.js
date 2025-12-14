//creating http server in node

let http = require("http");
const {URL} = require("url")
http.createServer(function (req, res){

    const {method, url} = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (method === 'GET' && pathname === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({status: "success", message: "good request"}));
        return;
    }

    console.log("Server start")
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);