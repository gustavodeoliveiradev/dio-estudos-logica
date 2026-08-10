/* Estrutura de Controle - If - Else-If - Else
 A estrutura de controle if else-if else é usada para executar um bloco de código
 se a condição especificada no if for verdadeira executa o bloco if.
 Se a condição do if for falsa, verifica a condição do else-if se verdadeira executa o código do else-if,
 se for falsa e todas as condições forem falsas, o código dentro do else será executado.
 
 A sintaxe básica do if-else-if é a seguinte:
if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição2 for verdadeira
} else {
    // código a ser executado se nenhuma das condições for verdadeira
}
*/

let nivelDeFome = 1

if (nivelDeFome === 1) {
    console.log("pouca fome")
} else if (nivelDeFome === 2) {
    console.log("muita fome")
} else {
    console.log("você comeria mais que o pica-pau")
}