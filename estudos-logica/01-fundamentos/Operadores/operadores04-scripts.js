// Escopo de variáveis
// 1. Escopo Global
// 2. Escopo Local

// Exemplo 1. Escopo Global:
let nome = "Maria";
function saudacao() {
    console.log("Olá, " + nome + "!");
}
saudacao();
// O escopo global é quando uma variável é declarada fora de qualquer função ou bloco, e pode ser acessada por qualquer parte do código.

// Exemplo 2. Escopo Local:
function saudacaoLocal() {
    let nomeLocal = "Carlos";
    console.log("Olá, " + nomeLocal + "!");
}
saudacaoLocal();
// O escopo local é quando uma variável é declarada dentro de uma função ou bloco, e só pode ser acessada dentro dessa função ou bloco.