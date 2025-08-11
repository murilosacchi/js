let umaFuncao = function () {
    console.log('Fui armazenada em uma variável')
}

umaFuncao()

function f(funcao) {
    return funcao()
}



function g() {
    function outraFuncao() {
        console.log('fui criado por g')
        function exibirA() {
            console.log('exibindo a letra A')
            return () => console.log('exibindo a letra B')
        } return exibirA()
    } return outraFuncao
}

f(g())()

function ola() {
    let nome = 'João'
    return function () {
        console.log(`Olá, ${nome}`)
    }
}

let olaResult = ola()
olaResult()

function saudacoesFactory(saudacao, nome) {
    return function () {
        console.log(`${saudacao}, ${nome}`)
    }
}

let olaJoao = saudacoesFactory('olá', 'joão')
let tchauJoao = saudacoesFactory('tchau', 'joão')
olaJoao()
tchauJoao()

function eAgora() {
    let cont = 1
    function f1() {
        console.log(cont)
    }
    cont++
    function f2() {
        console.log(cont)
    }
    cont++
    return { f1, f2 }
}

let eAgoraResult = eAgora()
eAgoraResult.f1()
eAgoraResult.f2()