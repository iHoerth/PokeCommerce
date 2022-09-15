const baseUrl = 'https://pokeapi.co/api/v2';

async function fetchPokemon(pokeUrl){
  const data = await fetch(pokeUrl);
  const result = await data.json();
  return result;
}

async function fetchAllPokemon(start,amount){
  const mainUrl = `${baseUrl}/pokemon?offset=${start}&limit=${amount}`
  const data = await fetch(mainUrl);
  const {results} = await data.json();

  const pokemons = await Promise.all(results.map(poke => fetchPokemon(poke.url)))
  const pokemonsWithTypes = pokemons.map(poke => ({...poke,types:getPokemonTypes(poke)}))

  const species = await getSpecies(pokemonsWithTypes);
  for(let i = 0; i < pokemonsWithTypes.length; i++){
    pokemonsWithTypes[i].species = species[i]; 
  }
  console.log(pokemonsWithTypes,'pokemon array');
  return pokemonsWithTypes;
};

const getPokemonTypes = pokemon => {
  const pokemonTypes = [];
  for(const typeData of pokemon.types){
    pokemonTypes.push(typeData.type.name);
  }
  return pokemonTypes;
}

const getSpecies = async (pokemonArray) => {
  const speciesUrl = pokemonArray.map(poke => poke.species.url);

  let species = await speciesUrl.map(async ele => {
    const data = await fetch(ele);
    const results = await data.json();
    return results;
  });

  species = Promise.all(species).then(data => data);
  return species;
}

const toTitleCase = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

const searchPokemon = (pokemonArray,e) => {
  const filteredPoke = pokemonArray.filter(poke => poke.name.toLowerCase().includes(e.target.value.toLowerCase()) || poke.id == e.target.value);
  return filteredPoke;
};

export  {searchPokemon,fetchAllPokemon,toTitleCase};