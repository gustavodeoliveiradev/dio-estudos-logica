let poteCafe = "Café Pilão";
let poteAcucar = "Açúcar Cristal";
let poteBiscoito = "Biscoito Maisena";
const mensagemDaVovo = "Na cozinha da vovó hoje tem: " 

console.log(mensagemDaVovo +
    poteCafe + ", " +
    poteAcucar + " e " +
    poteBiscoito + ".");

poteCafe = "Café 3 corações";

console.log(mensagemDaVovo +
    poteCafe + ", " +
    poteAcucar + " e " +
    poteBiscoito + ".");

// Evite declarar variáveis com numeros ou acentos. Isso pode causer erros no código. Exemplo:
// let poteCafé = "Café Pilão"; --- IGNORE ---
// let poteAçúcar = "Açúcar Cristal"; --- IGNORE ---
// let poteBiscoito = "Biscoito Maisena"; --- IGNORE ---
// Variáveis são padrão camelCase, ou seja, a primeira palavra é escrita com letra minúscula e as próximas palavras são escritas com letra maiúscula. Exemplo: poteCafe, poteAcucar, poteBiscoito.

/* Como vimos no exemplo acima, atribuimos valores que podem ser alterados posteriormente a declarações let.
Já a mensagemDaVovo é uma constante, portanto sua declaração é feita com const, ou seja, seu valor não será alterado posteriormente.

Repare que quando fizemos a mudança do valor da variável poteCafe, não precisamos redeclarar a variável com let, pois já o fizemos.
A declaração de uma variável é feita apenas uma vez, posteriormente não é necessário redeclará-la, mesmo que seu valor seja alterado.*/