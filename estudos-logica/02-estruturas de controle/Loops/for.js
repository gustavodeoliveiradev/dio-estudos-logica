// for

/* LAÇO DE REPETIÇÃO FOR:
for (let contador = 0; contador < 4; contador ++) {
    console.log(contador)
    console.log("aumentando o contador")
}

For é uma estrutura de repetição que permite executar um bloco de código várias vezes, 
enquanto uma condição for verdadeira.
A estrutura do for é composta por três partes: inicialização, condição e incremento.
A inicialização é feita antes do primeiro ponto e vírgula, 
a condição é feita entre o primeiro e o segundo ponto e vírgula, 
e o incremento é feito após o segundo ponto e vírgula.

- EXEMPLO:
for (inicialização; condição; incremento) {
    // bloco de código a ser executado
} */

let pontosDeVida = 0

for (let i = 0; i < 10; i++) {
    pontosDeVida += 1;
    console.log("Tomou poção mágica" + " " + i);
}

console.log(pontosDeVida + " " + "Totais");