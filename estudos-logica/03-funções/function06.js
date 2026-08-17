/* O que é um return:
    O return é uma declaração em JavaScript que finaliza imediatamente a execução de uma função
     e especifica o valor a ser devolvido para o contexto que a chamou. 

    Valor de Retorno: O valor especificado após a palavra-chave return é retornado. 
    Se a expressão for omitida (apenas return;), a função retorna undefined. 
    Controle de Fluxo: Ao encontrar um return, o código restante na função não é executado, 
    o que permite interromper a lógica antecipadamente (ex: validações). 
    
    Uso Prático: Diferente do console.log (que apenas exibe na tela), 
    o return permite que o resultado seja armazenado em variáveis 
    ou utilizado em outras operações dentro do código.
*/

// EXEMPLO I DE FUNÇÃO COM RETURN:
let result = sum(5, 10);

console.log("O Resultado dessa função é " + result)

function sum(numA, numB) {
    return numA + numB
}


// EXEMPLO II DE FUNÇÃO COM RETURN:

let userName = getFirstName("John Doe", " ");
console.log("Sea bienvenido " + userName);
userName = getFirstName("Jane-Doe", "-");
console.log("Sea bienvenido " + userName);

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar || " " )[0];
    return firstName;
}

/* 
O .split() é um método de string que divide uma string em um array de substrings 
com base em um separador especificado. 
Exemplo: "John Doe".split(" ") resulta em ["John", "Doe"].
Na função getFirstName, o método .split() é usado para separar o nome completo em partes,
e o primeiro elemento do array resultante (o primeiro nome) é retornado.
Vimos também que o splitChar é opcional, caso não seja fornecido, o padrão será um espaço (" ").
Usa-se o operador lógico OR (||) para definir um valor padrão caso splitChar seja undefined ou falsy.
O splitChar é usado para determinar qual caractere será usado como delimitador para dividir a string.
Caso o nome venha com (ex: "Jane-Doe"), o splitChar será "-" e a função retornará "Jane".
*/