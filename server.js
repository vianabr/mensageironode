//configurações padrão de bibliotecas
const express = require('express');

const server = express();

server.set('view engine', 'ejs')

server.set('views', './views')

server.use(express.static('./public'))

server.use(express.urlencoded({extended: true}))

//recuperando as arrays do arquivo mockup com "require", e disponibilizando na pasta principal de trabalho (home)

const frases = require('./mockup');

server.get('/', (req, res)=>{
    res.render('home', {frases})
})

//servidor rodando

server.listen(3000, function (){
    console.log('Servidor rodando http://localhost:3000')
});