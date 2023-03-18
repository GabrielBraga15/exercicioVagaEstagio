let ano =prompt ("Informe aqui sua idade.") //Variável de entrada
let mes =prompt ("Informe aqui a quantidade de meses.") //Variável de entrada
let dias =prompt ("Informe aqui o dia do mês.") //Variável de entrada
let resultadoDias = "" //Variável que irá receber o valor do resultado

dias =parseInt (dias) // Usei o parseInt para converter a variável "dias" em Int 

resultadoDias=(ano*365)+(mes*30)+dias // Soma das váriaveis para obter o resultado
alert (" O usuário tem " + resultadoDias + " dias de vida.") //Retorno do resultado para o usuário

