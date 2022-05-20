//configurações padrão de bibliotecas
const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.set('views', './views')

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))

//recuperando as arrays do arquivo mockup com "require", e disponibilizando na pasta principal de trabalho (home)

const frases = require('./mockup');

app.get('/', (req, res)=>{
    res.render('home', {frases})
})

//servidor rodando


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

