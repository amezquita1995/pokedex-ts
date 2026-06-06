interface Pokemon {
    name:string;
    level:number;
}

function findPokemonByName(pokemonTeam:Pokemon[], name: string) {
  return pokemonTeam.find(pokemon => pokemon.name === name) || null;
}

function filterByLevel(pokemonTeam:Pokemon[], minLevel: number) {
  return pokemonTeam.filter(pokemon => pokemon.level > minLevel);
}

function averageLevel(pokemonTeam:Pokemon[]) {
  const total = pokemonTeam.reduce((sum, pokemon) => sum + pokemon.level, 0);
  return total / pokemonTeam.length;
}

const pokemonTeam = [
  { name: "bulbasaur", level: 96 },
  { name: "charmander", level: 79 },
  { name: "squirtle", level: 64 },
  { name: "pikachu", level: 81 }
];

console.log("Find pokemon by name 'charmander':", findPokemonByName(pokemonTeam, "charmander"));
// { name: "charmander", level: 79 }

console.log("Pokemon with level above 80:", filterByLevel(pokemonTeam, 80));
// [ { name: "bulbasaur", level: 96 }, { name: "pikachu", level: 81 } ]

console.log("Average level:", averageLevel(pokemonTeam));
// 80