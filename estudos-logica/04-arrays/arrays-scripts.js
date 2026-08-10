let pokemon = ["Pikachu", "Squirtle", "Jigglypuff"];

console.log(pokemon[0]); // Output: Pikachu
console.log(pokemon[1]); // Output: Squirtle
console.log(pokemon[2]); // Output: Jigglypuff

// Adicionando um novo Pokémon ao array
pokemon.push("Bulbasaur");
console.log(pokemon); // Output: ["Pikachu", "Squirtle", "Jigglypuff", "Bulbasaur"]

// Removendo o último Pokémon do array
pokemon.pop();
console.log(pokemon); // Output: ["Pikachu", "Squirtle", "Jigglypuff"]

// Adicionando um Pokémon no início do array
pokemon.unshift("Charmander");
console.log(pokemon); // Output: ["Charmander", "Pikachu", "Squirtle", "Jigglypuff"]

// Removendo o primeiro Pokémon do array
pokemon.shift();
console.log(pokemon); // Output: ["Pikachu", "Squirtle", "Jigglypuff"]

// Encontrando o índice de um Pokémon
let index = pokemon.indexOf("Squirtle");
console.log(index); // Output: 1

// Verificando se um Pokémon está no array
let hasPikachu = pokemon.includes("Pikachu");
console.log(hasPikachu); // Output: true

// Criando um novo array com os nomes dos Pokémon em maiúsculas
let pokemonUpperCase = pokemon.map(p => p.toUpperCase());
console.log(pokemonUpperCase); // Output: ["PIKACHU", "SQUIRTLE", "JIGGLYPUFF"]

// Filtrando os Pokémon que começam com a letra "P"
let pokemonWithP = pokemon.filter(p => p.startsWith("P"));
console.log(pokemonWithP); // Output: ["Pikachu"]

// Ordenando os Pokémon em ordem alfabética
pokemon.sort();
console.log(pokemon); // Output: ["Jigglypuff", "Pikachu", "Squirtle"]

// Revertendo a ordem dos Pokémon
pokemon.reverse();
console.log(pokemon); // Output: ["Squirtle", "Pikachu", "Jigglypuff"]