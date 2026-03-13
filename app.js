const http = require('http');

const server = http.createServer((req, res) => {
    res.set
    res.write("<html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Node server</title><link rel='stylesheet' href='style.css'></head><body><h1>Hi. It's a Node server </h1></body></html>")
    return res.end();
})

server.listen(3000, () => {
    console.log("server running on PORT: 3000");
})