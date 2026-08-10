/*
As funções também tem suas regras como as variáveis,
por exemplo, não podemos declarar uma função com o mesmo nome de outra função, 
pois isso geraria um conflito de nomes.
Bem como, não podemos criar funções com nomes reservados do JavaScript,
como por exemplo, function, return, if, else, etc...

Também não podemos iniciar funções com números,
ou seja, não podemos criar uma função chamada 15enviar(),
pois isso geraria um erro de sintaxe.
Evite nomes com espaço, pois isso também geraria um erro de sintaxe.
Use os padrões de nomenclatura do JavaScript, como camelCase, PascalCase ou snake_case.

Use nomes que façam sentido, ou seja, que descrevam a ação que a função realiza.
Cuidado com os nomes genéricos, como função1(), função2(), etc... 
pois isso não ajuda a entender o que a função faz.

Outra boa prática é criar funções pequenas, que realizem apenas uma ação,
pois isso facilita a manutenção do código e a reutilização da função em outros lugares.
*/

// Por exemplo:

function getData() {
    // código para buscar dados
    console.log("Buscando dados")
}

function checkValues() {
    // código para verificar valores
    console.log("Verificando valores")
}

function sendToDataBase() {
    // código para enviar dados
    console.log("Enviando dados para a base de dados")
}

function mainSaveData() {
    getData()
    checkValues()
    sendToDataBase()
}

mainSaveData()

// Outra boa prática é criar funções puras, ou seja, funções que não dependem de variáveis externas,
// e que não alteram o estado do programa, ou seja, que não alteram variáveis globais.

/* 
Outra coisa muito importante é a chamada identação do código,
ou seja, a forma como o código é organizado visualmente.
Use o tab para identar o código, ou seja, para dar um recuo no código,
isso ajuda a entender melhor o que está acontecendo no código.
Por exemplo:
function mainSaveData() {
    getData()
    checkValues()
    if (dataIsValid) {
        sendToDataBase()
    }
}
*/

// funções também podem ser chamadas de métodos,
// e podem ser declaradas de várias formas, como por exemplo:

// Função declarada
function minhaFuncao() {
    console.log("Função declarada")
}