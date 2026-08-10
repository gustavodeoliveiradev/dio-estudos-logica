/* Estrutura de Controle - If-Else
 A estrutura de controle if-else é usada para executar um bloco de código
 se a condição especificada no if for verdadeira executa o bloco de código do if,
 se não, executa o bloco de código do else.
 Ou seja, se a condição do if for false, o código dentro do else será executado.
 Se a condição do if for true, o código dentro do else será ignorado.
 
 A sintaxe básica do if-else é a seguinte:
if (condição) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}
*/

let possuiOvos = false
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Leite"
} else {
    console.log("Passou na sessão de congelados")
    itensComprados = "lasanha congelada"
}

console.log("Item comprado: " + itensComprados)