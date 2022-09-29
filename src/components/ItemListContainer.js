import {useEffect, useState} from 'react'
import { Box, CircularProgress } from '@mui/material';

import ItemList from './ItemList';
import {fetchAll} from '../Services/Helpers';

const ItemListContainer = ({productType,setSearchValue,search}) => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getPoke = async() => {
      try{
        setLoading(true);
        const pokeList = await fetchAll(0,493,productType);
        setProducts(pokeList);
        setLoading(false);
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
      <div id="itemContainer">
        <ItemList products={filteredProducts} />
      </div>
    </div>
  )
}

export default ItemListContainer;