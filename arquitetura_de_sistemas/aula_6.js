function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}
calculoRapidinho(1000000000).then(resultado => {
    console.log(`Calculo rápidinho: ${resultado}`)
})
//Executa primeiro, mesmo que a promise já esteja fullfilled
console.log('Esperando...')

function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res);
    });
}
calculoDemorado(1000000000).then((resultado) => {
    console.log(`Calculo demorado: ${resultado}`)
})