//making http request server

const http = require("http");

//inorder to configure https we must config ssl certificates

const server = http.createServer(function (req, res) {
    const {url} = req;

    if(url === "/"){
        const capturePlatform = process;
        const captureMemory = process.memoryUsage();

        // console.log(capturePlatform, captureMemory)
        res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8' });
        setTimeout(() => {
            res.end('<h1>Welcome to the node server</h1>')
        }, 2000)
    }

    else if(url === "/api/products"){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>This is product page of the server</h1>')
    }
});

server.on("error", (error) => {
    console.log("Logging of the server error: ", error);
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at ${PORT}`);
    console.log("Press ctrl + C to quit server");
})