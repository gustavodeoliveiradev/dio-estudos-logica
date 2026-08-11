/*
ESCOPO DE VARIÁVEIS E MULTIPLOS PARÂMETROS
O escopo de uma variável é o contexto no qual ela é definida e pode ser acessada. 
Em JavaScript, existem dois tipos principais de escopo: global e local.
*/

// Exemplo de função com parâmetros:

function torrar(pao) { // "pao" equivale a uma variável local, que só existe dentro da função
    console.log("torrada feita com " + pao) // escopo da nossa função
}

/*
 No exemplo acima, "pao" representa uma variável local
 e por isso, se chamarmos:
 console.log(pao) fora da função, teremos um erro,
 pois a variável "pao" não existe fora do escopo da função "torrar".
 O erro seria: "ReferenceError: pao is not defined"
 No entanto, se o console.log(pao) estiver dentro da função, ele funcionará normalmente.
 Como já vimos, se chamarmos a função "torrar", o console.log("torrada feita com " + pao) será executado, 
 e o valor do argumento passado para a função será exibido no console normalmente.
*/

torrar("pão de forma") // chamando a função com o argumento "pão de forma"
torrar("pão integral") // chamando a função com o argumento "pão integral"

/*
 No caso de chamarmos um console.log() dentro da função torrar(),
 nomeando uma variável externa, teremos um erro,
 pois a variável externa não existe dentro do escopo da função.
 O erro seria: "ReferenceError: cannot access 'variavelExterna' before initialization"
 A menos que utilizemos a palavra-chave "var" para declarar a variável externa,
 pois nesse caso, a variável externa será "içada" para o topo do escopo global,
 e poderá ser acessada dentro da função.
*/

// Exemplo de variáveis:

var variavelExterna = "variável externa"
// A variável externa "var" tem caráter global,
// e por isso, pode ser acessada dentro da função "torrar()"

function torrar0(pao) {
    console.log("torrada feita com " + pao)
    console.log(variavelExterna) // acessando a variável externa dentro da função
}

// Contudo, se utilizarmos a palavra-chave "let" ou "const" para declarar a variável externa,
// a variável externa terá caráter de escopo de bloco, e não poderá ser acessada dentro da função.

/* 
Mas o exemplo acima não é muito recomendado
pois pode levar a efeitos colaterais indesejados e dificulta a manutenção do código
*/

function torrar1(pao, nome) {
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
}

torrar1("pão de forma", "João") // chamando a função com dois argumentos
// No exemplo acima, a função "torrar1" recebe dois parâmetros: "pao" e "nome".
// Quando chamamos a função com os argumentos "pão de forma" e "João",
// o valor do primeiro argumento é atribuído ao parâmetro "pao",
// e o valor do segundo argumento é atribuído ao parâmetro "nome".
// Em seguida, a função imprime as mensagens no console, utilizando os valores dos parâmetros.