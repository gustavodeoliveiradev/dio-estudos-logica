/*
FUNÇÕES COM PARAMETROS:
O que são parâmetros?
Parâmetros são variáveis que são passadas para uma função quando ela é chamada. 
Eles permitem que você forneça informações ou valores específicos para a função, 
tornando-a mais flexível e reutilizável.
*/

// Exemplo de função com parâmetros:

function torrar(pao) { // definindo a função com o parâmetro "pao"
    console.log("torrada feita com " + pao) // escopo da nossa função
}

torrar("pão de forma") // chamando a função com o argumento "pão de forma"

/*
 No exemplo acima, a função "torrar" recebe um parâmetro chamado "pao".
 Quando chamamos a função com o argumento "pão de forma", 
 o valor desse argumento é atribuído ao parâmetro "pao" dentro da função. 
 Em seguida, a função imprime a mensagem "torrada feita com pão de forma" no console.
 É como se o parâmetro "pao" fosse uma variável que recebe o valor passado quando a função é chamada.
*/

torrar("pão francês") // chamando a função com o argumento "pão francês"
torrar("pão integral") // chamando a função com o argumento "pão integral"