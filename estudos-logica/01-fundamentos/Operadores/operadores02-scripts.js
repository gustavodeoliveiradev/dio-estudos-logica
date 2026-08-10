// Operadores de incromento e decremento
// 1. Incremento (++)
// 2. Decremento (--)

// Exemplo 1. Incremento:
let contador = 0;
contador++;
contador++;
console.log("operação de incremento: " + contador);
// podemos fazer a mesma operação de maneiras diferentes, como por exemplo:
let numero = 5;
numero = numero + 1;
console.log("operação de incremento: " + numero);
// O operador de incremento pode ser usado antes ou depois da variável, mas o resultado será o mesmo:
let valor = 10;
console.log("operação de incremento: " + valor++);
console.log("operação de incremento: " + valor);
// Ou seja, o operador de incrimento serve para aumentar o valor da variável em + 1.

// Exemplo 2. Decremento:
let contador2 = 10;
contador2--;
console.log("operação de decremento: " + contador2);
// podemos fazer a mesma operação de maneiras diferentes, como por exemplo:
let numero3 = 20;
numero3 = numero3 - 1;
console.log("operação de decremento: " + numero3);
// O operador de decremento pode ser usado antes ou depois da variável, mas o resultado será o mesmo:
let valor2 = 15;
console.log("operação de decremento: " + valor2--);
console.log("operação de decremento: " + valor2);
// Ou seja, o operador de decremento serve para diminuir o valor da variável em - 1.