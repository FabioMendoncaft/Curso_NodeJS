const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.send('Ola')
})

app.get('/sobre', function(req, res) {
    res.send('Pagina de sobre!')
})

app.get('/dados/:nome/:idade', function(req, res) {
    res.send("<h1> Seu nome e: " + req.params.nome + "</h1>" +
        "<h2>Sua idade e: " + req.params.idade + "</h2>")
})

app.listen('8081', function() {
    console.log('servidor on-line')
})