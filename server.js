const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')



//Iniciando app
const app = express()
app.use(express.json())
app.use(cors())
//Conexao banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/models')

//Rota coringa
app.use('/api', require('./src/router'))


app.listen(3000, () => {
    console.log('servidor rodando!')
})