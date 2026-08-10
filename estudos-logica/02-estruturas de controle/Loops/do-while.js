//do while

/* DO WHILE EXEMPLO:
do {
    // bloco de código a ser executado
} while (condição);

- O do while é uma estrutura de repetição que permite executar um bloco de código várias vezes,
enquanto uma condição for verdadeira.
A diferença em relação ao while é que a condição é verificada após a execução do bloco de código,
portanto, o bloco de código será executado pelo menos uma vez,
mesmo que a condição seja falsa na primeira verificação.

AVISO: Assim como o while, é importante ter cuidado ao usar o do while também,
pois se a condição nunca se tornar falsa, o loop continuará indefinidamente,
resultando em um loop infinito.
Certifique-se de que a condição em algum momento se torne falsa para evitar esse problema.
*/

let contador = 0;

do {
    console.log("Olá");
    contador++;
} while (contador < 3);