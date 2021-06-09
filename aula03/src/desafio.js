//desafio: obter a quantidade de dias que temos de diferença entre as datas 
//15/05/2020 - 15/05/2021 utilizando moment e date-fns
//passo 1 - criar uma variável pra data inicial e final e colocar o ano formatado com moment
//passo 2 - criar uma variável que irá receber a quantidade de dias ja retornada da comparação entre as duas
//datas, lembre-se de usar o método diff do moment
const moment = require('moment')
const { differenceInDays } = require("date-fns")

var dataInicial = moment('2020-05-15')
var dataFinal = moment('2021-05-15')

var diferenca = dataFinal.diff(dataInicial, 'days')
console.log(diferenca)

var difMeses = dataFinal.diff(dataInicial, 'months')
console.log(difMeses)

// date-fns

var dataInicialFNS = new Date(2020, 05, 15)
var dataFinalFNS = new Date(2021, 05, 15)

var diferencaFNS = differenceInDays(dataFinalFNS, dataInicialFNS)
console.log(diferencaFNS)