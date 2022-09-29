import {useEffect, useState} from 'react'

import FilterSection from './FilterSection';
import ItemList from './ItemList';
import {fetchAllPokemon} from '../Services/Helpers';
import { Box, CircularProgress } from '@mui/material';

const ItemListContainer = ({productType}) => {
  const [products,setProducts] = useState([]);
  const [search,setSearch] = useState('');
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    const getPoke = async() => {
      try{
        const pokeList = await fetchAllPokemon(0,493,productType);
        setProducts(pokeList);
        setLoading(false);
      } catch (error) {
        console.log('hubo un error')
      }
    }
    getPoke();
  },[])

  const searchPokemon = e => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search) || product.id == search);

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
      <FilterSection search={search} searchPokemon={searchPokemon} />
      <div id="itemContainer">
        <ItemList products={filteredProducts} />
      </div>
    </div>
  )
}

export default ItemListContainer;