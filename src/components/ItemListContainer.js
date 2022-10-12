import {useEffect, useState} from 'react'
import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import ItemList from './ItemList';
import {fetchAll} from '../Services/Helpers';



const ItemListContainer = ({search}) => {
  const [pokemons,setPokemons] = useState([]);
  const [loading,setLoading] = useState(true);
  const {type} = useParams();

  useEffect(() => {
    const getPoke = async() => {
      setLoading(true);
      const pokeList = await fetchAll(0,493); 
      if(type !== undefined) {
        const categoryFilter = pokeList.filter(poke => poke.types.includes(type));
        setPokemons(categoryFilter);
        setLoading(false);
      } else {
        setPokemons(pokeList);
        setLoading(false);
      }

    }
    getPoke();
  },[type])

  
  const filteredPoke = pokemons.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()) || poke.id == search);

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
      <div className='categories'> 
        <ul>
          <h3>Categorias</h3>
          <NavLink className='categoryLink' to='/pokemons/'>ALL</NavLink>
          <NavLink className='categoryLink' to='/pokemons/fire'>Fire</NavLink>
          <NavLink className='categoryLink' to='/pokemons/grass'>Grass</NavLink>
          <NavLink className='categoryLink' to='/pokemons/water'>Water</NavLink>
          <NavLink className='categoryLink' to='/pokemons/electric'>Electric</NavLink>
          <NavLink className='categoryLink' to='/pokemons/ice'>Ice</NavLink>
          <NavLink className='categoryLink' to='/pokemons/bug'>Bug</NavLink>
          <NavLink className='categoryLink' to='/pokemons/poison'>Poison</NavLink>
          <NavLink className='categoryLink' to='/pokemons/ghost'>Ghost</NavLink>
          <NavLink className='categoryLink' to='/pokemons/psychic'>Psychic</NavLink>
          <NavLink className='categoryLink' to='/pokemons/dark'>Dark</NavLink>
          <NavLink className='categoryLink' to='/pokemons/fairy'>Fairy</NavLink>
          <NavLink className='categoryLink' to='/pokemons/fighting'>Fighting</NavLink>
          <NavLink className='categoryLink' to='/pokemons/normal'>Normal</NavLink>
          <NavLink className='categoryLink' to='/pokemons/flying'>Flying</NavLink>
          <NavLink className='categoryLink' to='/pokemons/steel'>Steel</NavLink>
          <NavLink className='categoryLink' to='/pokemons/dragon'>Dragon</NavLink>
          <NavLink className='categoryLink' to='/pokemons/rock'>Rock</NavLink>
          <NavLink className='categoryLink' to='/pokemons/ground'>Ground</NavLink>
        </ul>
      </div>
      <div id="itemContainer">
        <ItemList pokemons={filteredPoke} />
      </div>
    </div>
  )
}

export default ItemListContainer;