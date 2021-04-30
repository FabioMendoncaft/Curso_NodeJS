var http = require('http')
http.createServer(function(req, res) {
    res.end("De boas")
}).listen(9091)

console.log('Teste')