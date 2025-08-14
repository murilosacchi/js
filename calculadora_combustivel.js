const prompt = require('prompt-sync')();
const valorGasolina = prompt('Digite o valor da gasolina: ')
const valorEtanol = prompt('Digite o valor do etanol: ')

const resultProp = valorGasolina / valorEtanol

if (resultProp <= 0.70) {
    console.log('Etanol')
} else {
    console.log('Gasolina')
}