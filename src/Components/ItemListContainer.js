import {useEffect, useState} from 'react'
import { Box, CircularProgress } from '@mui/material';

import ItemList from './ItemList';
import {fetchAll} from '../Services/Helpers';
import { createItem, deleteItem, getItems } from '../Services/Api';

const ItemListContainer = ({productType,setSearchValue,search}) => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  const pruebaFireBase = (pokemons) => {
    console.log(pokemons);
    pokemons.forEach(poke => {
      const newPoke = {
        productType: poke.productType,
        name: poke.name,
        order: poke.id,
        types: poke.types,
        sprites: {front_default: poke.sprites.front_default},
        stats: poke.stats,
        weight: poke.weight,
        base_experience: poke.base_experience,
        base_happiness: poke.species.base_happiness,
        capture_rate: poke.species.capture_rate,
        evolution_chain: poke.species.evolution_chain,
        egg_groups: poke.species.egg_groups,
        is_legendary: poke.species.is_legendary,
      }
      console.log(newPoke);
      createItem(newPoke,'pokemons')
    })
  }
  useEffect(() => {
    const getPoke = async() => {
      try{
        setLoading(true);
        const pokeList = await fetchAll(0,493,productType);
        setProducts(pokeList);
        setLoading(false);
        console.log(pokeList)
      } catch (error) {
        console.log('hubo un error')
      }
    }
    getPoke();
  },[productType])

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.id == search);

  if(loading){
    return (
      <div id="itemContainerWrapper">
        <div id="itemContainer" style={{justifyContent:'center'}}>
          <Box sx={{ display: 'flex',alignItems:'center'}}>
            <CircularProgress style={{color:'red',marginRight:'14px'}} />
            <p style={{fontSize:'22px'}}>SEARCHING FOR POKEMON...</p>
          </Box>
        </div>
      </div>
    )
  } 

  return (
    <div id="itemContainerWrapper">
      <div> 
        <p>HOLA SOY UN DIV</p> 

      </div>
      <div id="itemContainer">
        <ItemList products={filteredProducts} />
      </div>
    </div>
  )
}

export default ItemListContainer;