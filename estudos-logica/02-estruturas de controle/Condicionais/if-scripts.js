/* Estrutura de Controle - If
 A estrutura de controle if é usada para executar um bloco de código
 apenas se a condição especificada for verdadeira.
 
 A sintaxe básica do if é a seguinte:
if (condição) {
    // código a ser executado se a condição for verdadeira
}
*/

let ehLigado = false;

if (ehLigado) {
    console.log("executou comando");
} 
// tudo o que está no if só executa se a condição for verdadeira, ou seja, se ehLigado for true. Se for false, o código dentro do if é ignorado.


if (1 === 1) {
    console.log("agora sim, execute o comando")
}

ehLigado = true;

if (ehLigado) {
    console.log("agora ele execute o comando")
}

let possuiOvos = true;
let itensComprados = "";

if (possuiOvos) {
    itensComprados = "Leite";
}

console.log("item comprado: " + itensComprados);