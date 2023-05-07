const http = require('http')
const today = require('./today')

const requestListener = function (req, res) {
    res.writeHead(200)
    res.end('Hello, World!, Today is ' + today.getDate() + ' ');
    console.log('Request received')
}

const port = 8080
const server = http.createServer(requestListener)
server.listen(port)