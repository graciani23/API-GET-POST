const filmes = require('../models/filmes.json')
const fs = require('fs')

exports.get = (req, res) => {
    res.status(200).send(filmes)
}

exports.getDiretor = (req, res) => {
    const nomeDiretor = req.params.diretor
    const filmeDiretor = filmes.filter(item => item.director == nomeDiretor)
    res.status(200).send(filmeDiretor)
}

exports.getGenero = (req, res) => {
    const nomeGenero = req.params.genero
    const filmeGenero = filmes.filter(item => item.genre.indexOf(nomeGenero) > -1)
    res.status(200).send(filmeGenero)
}

exports.post = (req, res) => {
    const { title, year, director, duration, genre, rate } = req.body
    filmes.push({ title, year, director, duration, genre, rate })

    fs.writeFile('./src/models/filmes.json', JSON.stringify(filmes), 'utf8', function(err) {
        if (!err) {
            return res.status(500).send({ message:err })
        }
        console.log('O arquivo foi salvo!')
    })
    return res.status(200).send(filmes)
}