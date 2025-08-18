const fs = require('fs')
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`)
        }
        else {
            console.log(`Conteúdo: ${conteudo.toString()}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = function (erro) {
                if (erro) {
                    console.log(`Erro tentando salvar arquivo: ${erro}`)
                }
                else {
                    console.log(`Conteúdo: ${dobro.toString()}`)
                    const triplo = +dobro.toString() * 3
                    const exibirTriplo = function (erro) {
                        if (erro) {
                            console.log(`Erro ao salvar arquivo: ${erro} `)
                        }
                        else {
                            console.log(`Salvou arquivo triplo com sucesso! Conteúdo: ${triplo}`)
                        }
                    }
                    fs.writeFile('triplo.txt', triplo.toString(), exibirTriplo)
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Continuando...')
}
abrirArquivo('arquivo.txt')