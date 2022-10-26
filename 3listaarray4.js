/*
 Crie um algoritmo que pede um número inteiro positivo para o usuário. Em
seguida, popule uma array com os números de Fibonacci, na hora de somar com
os termos anteriores, some com elementos anteriores do array. Faça com que o
array tenha no máximo 10 elementos, para iniciar a sequência use o número que
o usuário inseriu -1.
Ex.: inseriu o número 8,
a sequência deve começar da seguinte maneira 7 8 15 23
*/
var arrayFibonacci = []
var numero = parseInt(prompt("Insire um número"))
arrayFibonacci[0] = numero - 1
arrayFibonacci[1] = numero
for (var contador = 2; contador < 10; contador++) {
    arrayFibonacci[contador] = arrayFibonacci[contador - 1] + arrayFibonacci[contador - 2]
    
}
console.log(arrayFibonacci)