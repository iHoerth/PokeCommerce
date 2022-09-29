const baseUrl = 'https://pokeapi.co/api/v2';

async function fetchPokemon(pokeUrl){
  const data = await fetch(pokeUrl);
  const result = await data.json();
  return result;
}

async function fetchAllPokemon(start,amount,productType){
  const mainUrl = `${baseUrl}/${productType}?offset=${start}&limit=${amount}`
  const data = await fetch(mainUrl);
  const {results} = await data.json();
  const products = await Promise.all(results.map(poke => fetchPokemon(poke.url)))

  switch(productType){
    case 'item':
      {
        products.map(x => ({productType:'item',...x}))
        const purchasableProducts = products.filter(ele => ele.cost !== 0);
        console.log(purchasableProducts);
        return purchasableProducts;
      }
    case 'pokemon':
      {
        const pokemons = products.map(poke => ({productType:'pokemon',...poke,types:getPokemonTypes(poke),cost:300 + Math.floor(Math.random()*5000)}))
        const species = await getSpecies(pokemons);
        for(let i = 0; i < pokemons.length; i++){
          pokemons[i].species = species[i]; 
        }
        return pokemons;
      }
  }
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