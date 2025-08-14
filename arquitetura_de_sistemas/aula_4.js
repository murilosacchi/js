let pessoa = {
    nome: 'joão',
    idade: 17
}

console.log('Me chamo ' + pessoa.nome)

console.log('Tenho ' + pessoa['idade'] + ' anos')

let pessoaComEndereco = {
    nome: 'maria',
    idade: 21,
    endereco: {
        logradouro: 'Rua B',
        numero: 121
    }
}

console.log(
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco['logradouro']}
    número ${pessoaComEndereco['endereco']['numero']}`
)