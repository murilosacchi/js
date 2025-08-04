// const: não pode reatribuir
const nome = 'Murilo'
console.log(nome)

// let: pode reatribuir
let nome2 = 'Murilo'
nome2 = 'José'
console.log(nome2)
nome2 = 2
console.log(typeof(nome2))

// var: também pode reatribuir, mas antigo
var linguagem = 'Javascript'
console.log("Aprendendo " + linguagem)
var linguagem = 'Java'
console.log("Aprendendo " + linguagem)

let idade = 18
console.log(`Oi, ${nome}`)
if(idade >= 18){
    let nome = 'João'
    console.log('Você pode dirigir, ' + nome)
}
console.log('Até mais, ' + nome)