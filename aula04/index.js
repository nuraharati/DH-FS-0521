//Desafio 1 - criar 3 variáveis: nome, idade, eMaiorDeIdade
let nome = 'Nura';
let idade = 26;
let eMaiorDeIdade = true;

//Desafio 2 - criar uma variável do tipo objeto com três propriedades: nome, idade e eMaiorDeIdade

let pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
}

//para imprimir uma propriedade do objeto criado utilizar o nomeDoObjeto.nomeDaPropriedade

console.log(pessoa.nome)

// Desafio 3 - criar uma variável animais do tipo array e declarar 4 animais

let animais = ['foca', 'leão', 'preguiça', 'lontra']

console.log(animais)

//Operadores aritméticos
//criar duas variáveis numero1 e numero2, atribuir valor

let numero1 = 10
let numero2 = 25

//criar variável resultadoSoma

let resultadoSoma = numero1+numero2
console.log(resultadoSoma)

let resultadoSubtracao = numero1-numero2
console.log(resultadoSubtracao)

let resultadoDivisao = numero1/numero2
console.log(resultadoDivisao)

let resultadoMultiplicacao = numero1*numero2
console.log(resultadoMultiplicacao)

//Desafio 4 - Através de uma comparação, validar qual valor é maior

if(numero1>numero2){
    console.log("O número " + numero1 + " é maior que o número " + numero2)
}else{
    console.log("O número " + numero2 + " é maior que o número " + numero1)  
}