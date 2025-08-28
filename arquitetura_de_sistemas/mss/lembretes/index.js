const express = require('express')
const app = express()
const lembretes = {}
const bodyParser = require('body-parser')
app.use(bodyParser.json())
contador = 0 

// para obter todos os lembretes
// GET /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

//para cadastrar novo lembrete
//POST /lembretes {"texto": "Fazer café"}
app.post('/lembretes', (req, res) => {
    contador++
    const { texto } = req.body
    lembretes[contador] = {
        contador, texto
    }
    res.status(201).send(lembretes[contador])
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}`)
})