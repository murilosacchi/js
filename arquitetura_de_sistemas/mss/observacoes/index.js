const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const observacoesPorLembreteId = {}
const { v4: uuidv4 } = require('uuid')

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})


app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

const port = 5000
app.listen(port, () => {
    console.log(`Lembretes na porta ${port}`)
})