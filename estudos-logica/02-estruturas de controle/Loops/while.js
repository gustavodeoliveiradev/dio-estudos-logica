// while
/*  EXEMPLO DE lAÇO DE REPETIÇÃO WHILE:
while (condição) {
    // bloco de código a ser executado
}
- O while é uma estrutura de repetição que permite executar um bloco de código várias vezes,
enquanto uma condição for verdadeira. 
A condição é verificada antes da execução do bloco de código,
portanto, se a condição for falsa na primeira verificação, 
o bloco de código não será executado nenhuma vez.

AVISO: É importante ter cuidado ao usar o while,
pois se a condição nunca se tornar falsa, o loop continuará indefinidamente,
resultando em um loop infinito. 
Certifique-se de que a condição em algum momento se torne falsa para evitar esse problema.
*/

let contador = 0;

while (contador < 3) {
    console.log("olá")
    contador++;
}