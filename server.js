const express = require('express')
const router = require('./src/routes/router')
const DB = require('./src/dataBase/db')
const cors = require('cors')


const app = express()
const port = 3000


const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization',
}

app.use(cors(corsOptions)) // Configurar CORS antes das rotas
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.connectDataBase()
})