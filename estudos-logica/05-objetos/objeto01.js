/* O que é um JSON: (JavaScript Object Notation)
Uma notação de objetos em javascript

O JSON é um agrupamento de dados de uma maneira mais organizada
Uma caixa onde são guardados um conjunto de dados ou uma estrutura de dados
Que podem ser transportados e isso veremos em qualquer linguagem de programação

Simplificando: É um jeito de transportar dados de uma maneira mais organizada

1 - JSON é um objeto simples composto por chave e valor
com o objetivo de transferir dados
*/

let invoice = {
    // escopo do meu JSON
    name: "Gustavito",
    age: 38,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.99]
    },
    taxes: "98.90"
}

/*
generateInvoice(name, age, products, productsValues)

function generateInvoice(name, age, products, productsValues) {
    console.log("O comprador é: " + name)
    console.log("A idade é: " + age)
    console.log(".............")
    console.log("O produto é: " + products[0])
    console.log("O valor é: " + productsValues[0])
}
*/

function generateInvoice(invoice) {
    console.log(`O comprador é: ${invoice.name}`)
    console.log(`A idade é: ${invoice.age}`)
    console.log(".............")

    for(let index in invoice.products) {
        // escopo do forIn
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

generateInvoice(invoice);