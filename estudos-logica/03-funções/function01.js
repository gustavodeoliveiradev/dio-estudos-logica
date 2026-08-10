/*
 - O que é uma função?
 - Uma função é um bloco de código que pode ser reutilizado várias vezes.
 - Ela pode receber parâmetros e retornar valores.
 - As funções ajudam a organizar o código e torná-lo mais legível.
*/

function torrar() {
    console.log("Torrando pão")
    injetar()
}

torrar()


function injetar() {
    console.log("preparando para injetar o pão")
    console.log("finalizado")
} 
// tudo o que está dentro das chaves é o escopo da função,
// ou seja, só pode ser acessado dentro da função
