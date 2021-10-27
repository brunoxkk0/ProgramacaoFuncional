const funcionarios = [
    {
        id: 11,
        nome: 'Cida Silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'Joana da Silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'Joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'Antônio Carlos',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'Paula Pimenta',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'Maria José',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'Fulano de Tal',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
];

function findGerentes(){
    return funcionarios.filter((fun) => {
        return fun.categoria === 'gerente'
    })
}

//console.log(findGerentes())

function findLowerID() {
    return funcionarios.reduce(function(acc, cur){

        if(acc.id > cur.id){
            acc = cur;
        }

        return acc;
    })
}

//console.log(findLowerID())

function uppercaseAll() {
    return funcionarios.map((fun) => {
        fun.nome = fun.nome.toUpperCase()
        return fun;
    })
}

console.log(uppercaseAll())
