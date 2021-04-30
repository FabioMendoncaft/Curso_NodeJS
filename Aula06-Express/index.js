const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.end('Bem vindo')
})

app.get('/sobre', function(req, res) {
    res.end('Pagina de sobre')
})

app.get('/perfil', function(req, res) {
    res.end('Perfil')
})

app.get('/ola/:nome/:cargo/:cor', function(req, res) {
    res.end("<h1>Seu nome: " + req.params.nome + "</h1>" +
        "<h2>Seu cargo: " + req.params.cargo + "</h2>" +
        "<h3>Sua cor preferida: " + req.params.cor) + "</h3>"
})

app.listen(9091, function() {
    console.log("localhost:9091")
})