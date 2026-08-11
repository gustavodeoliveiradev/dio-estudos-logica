torrar("pão de forma", "João") // chamando a função com dois argumentos
torrar("pão integral") // chamando a função com um argumento
torrar("pão francês", "Maria", 15.50) // chamando a função com três argumentos


function torrar(pao, nome = "cliente", valor = 10.90) { // definindo a função com três parâmetros, sendo os dois últimos opcionais
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
    console.log("o valor do pedido é " + valor)
}

/*
O que acontece se chamarmos a função "torrar" com apenas um argumento, como em:
torrar("pão de forma")
O console dirá "torrada feita com pão de forma" e "ela é um pedido de undefined",
pois o segundo parâmetro "nome" não recebeu nenhum valor, e por isso, seu valor é "undefined".
Isso significa que a função ainda funciona, mas o segundo parâmetro não foi definido.
Contudo, como vimos no exemplo acima,
podemos definir um valor padrão para o parâmetro, e assim,
caso o valor não seja fornecido, o parâmetro assumirá o valor padrão definido.
Se definirmos o valor na chamada da função, 
o valor padrão definido no parâmetro da função será sobrescrito pelo valor fornecido na chamada da função.

IMPORTANTE:
Os parâmetros de uma função são como variáveis e assim como variáveis, eles podem ter valores padrão.
Eles podem ter valores do tipo string, number, boolean, array, object, etc... tal qual uma variável.

Sempre que tivermos valores opcionais,
é uma boa prática definir valores opcionais para o final da lista de parâmetros,
e não no início ou no meio da lista de parâmetros.
Isso porque, se definirmos um valor opcional no início ou no meio da lista de parâmetros,
e chamarmos a função com apenas um argumento, 
o valor do parâmetro opcional será sobrescrito pelo valor do argumento fornecido.
*/