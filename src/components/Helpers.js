const getPokemonTypes = pokemon => {
  const pokemonTypes = [];
  for(const typeData of pokemon.types){
    pokemonTypes.push(typeData.type.name);
  }
  return pokemonTypes;
}
async function fetchPokemon(idStart,idEnd){
  const allPokemon = [];
  for(let i = idStart; i <= idEnd; i++){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    const pokemonTypes = getPokemonTypes(await data);
    data.types = pokemonTypes;
    allPokemon.push(data);
  };
  return allPokemon;
};

const toTitleCase = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

export  {getPokemonTypes,fetchPokemon,toTitleCase};