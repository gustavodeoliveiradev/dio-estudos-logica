// estrutura de decisão
// switch/case/break/default

let fruta = "morango"

/* 
1º exemplo: SWITCH/case
No caso abaixo, vimos a estrutura de decisão switch/case,
onde o valor da variável fruta é comparado com os valores dos cases.
Caso o valor da variável fruta seja igual ao valor do case, o código dentro do case será executado.
switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")

    case "banana":
        console.log("Vitamina de banana")
} */

/*
2º exemplo: switch/CASE
No caso abaixo, vimos a estrutura de decisão switch/case,
onde o valor da variável fruta é comparado com os valores dos cases de cima para baixo.
Caso o valor da variável fruta seja igual ao valor do case,
o código dentro do case será executado e os outros cases abaixo dele também serão executados.
switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")

    case "banana":
        console.log("Vitamina de banana")

    case "maçã":
        console.log("Suco de maçã")
} */

/*
3º exemplo: BREAK
No caso abaixo, vimos a estrutura de decisão switch/case,
onde o valor da variável fruta é comparado com os valores dos cases de cima para baixo.
Caso o valor da variável fruta seja igual ao valor do case,
o código dentro do case será executado e os outros cases abaixo dele não serão executados.
Porque o break é utilizado para sair do switch/case.
O break após a estrutura analisar o case,
faz com que o código saia do switch/case e não execute os outros cases abaixo do case executado.
switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        break
    case "banana":
        console.log("vitamina de banana")
        break
    case "maçã":
        console.log("suco de maçã")
} */

/* 
4º exemplo: DEFAULT
No caso abaixo, vimos a estrutura de decisão switch/case,
onde o valor da variável fruta é comparado com os valores dos cases de cima para baixo.
Caso o valor da variável fruta seja igual ao valor do case,
o código dentro do case será executado
e os outros cases abaixo dele não serão executados.
se o break for utilizado abaixo do case para sair do switch/case
como vimos no exemplo anterior.
Caso o valor da variável fruta não seja igual a nenhum dos valores dos cases,
o código dentro do default será executado.
Lembrando que o default é opcional, mas é uma boa prática utilizá-lo.

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        break
    
    case "banana":
        console.log("vitamina de banana")
        break
    
    case "maçã":
        console.log("suco de maçã")
        break

    default:
        console.log("suco gelado")
} */

/*
5º exemplo: CASES MÚLTIPLOS
No caso abaixo, vimos a estrutura de decisão switch/case,
onde o valor da variável fruta é comparado com os valores dos cases de cima para baixo.
Caso o valor da variável fruta seja igual ao valor do case,
o código dentro do case será executado e os outros cases abaixo dele não serão executados
se o break for utilizado abaixo do case para sair do switch/case
Importante destacar que o switch/case permite que um case seja utilizado para mais de um valor.
Bem como, o case pode transmitir mais de uma mensagem ou
mais de um console.log(), ou concatenar uma mensagem com uma variável.
São diversas as possibilidades do switch/case, mas o importante é entender a estrutura de decisão. */

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        break
    
    case "banana":
    case "morango":
        console.log("vitamina" + " de " + fruta)
        break
    
    case "maçã":
        console.log("suco de maçã")
        break

    default:
        console.log("suco gelado")
} 