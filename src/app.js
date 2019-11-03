const express = require('express')
const app = express()

app.all("*", function(req, res, next) {
    next()
})

app.use(express.json())
// rotas
const filmes = require('../src/routes/filmesRoute')

app.use('/', filmes)


module.exports = app