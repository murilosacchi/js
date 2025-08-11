// coerção
const n1 = 2
const n2 = '3'
const n3 = n1 + n2
const n4 = n1 + Number(n2)

console.log(`${n3}\nTipo: ${typeof (n3)}`)
console.log(`${n4}\nTipo: ${typeof (n4)}`)

// comparação
console.log([] == [])
console.log([1] == [1])
console.log(1 == '1')

console.log(1 === [1])
console.log([1] === [1])
a1 = [1]
a2 = a1
console.log(a1 === a2)

// vetores
v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = 'abc'
v1[1000] = 'ficou longo'

console.log(v1)
console.log(v1.length)

v2 = [2, 'abc', true]
console.log(v2)
console.log(v2.length)

for (let i = 0; i < v2.length; i++) {
    console.log(v2[i])
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
    "Cristina"]
const apenasComA = nomes.filter((n) => n.startsWith('A'))
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(0))
console.log(res)

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)

// funções
function hello() {
    console.log('oi')
}
hello()

function hello(nome) {
    console.log('hello, ' + nome)
}
hello('Murilo')

function funcaoSoma(a, b) {
    return a + b
}
const res2 = funcaoSoma(2, 3)
console.log(res2)

const dobro = function (n) {
    return n * 2
}
const res3 = dobro(4)
console.log(res3)

const triplo = function (n) {
    return n * 3
}
console.log(triplo())
console.log(triplo(10))

// arrow function
const helloArrow = () => console.log("Hello");
helloArrow();

const dobroArrow = (valor) => valor * 2;
console.log(dobroArrow(10));

const triploArrow = (valor) => {
    return valor * 3;
};
console.log(triploArrow(10));

const ehPar = (n) => {
    return n % 2 === 0;
};
console.log(ehPar(10));