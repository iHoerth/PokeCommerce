import CartWidget from "./CartWidget";
import {Link,NavLink} from 'react-router-dom';
import { useState } from "react";
import CartContext from "../Context/CartContext";

const NavBar = () => {
  const [openCart, setOpenCart] = useState(false);

  const showCart = () => {
    setOpenCart(!openCart);
  }

    

  return (
    <>
      <div className='header'>
             <div className='NavBar'>
          {/* puse nombres genericos de los items del Navbar porque nose muy bien que estructura tendra el pokedex y no se que quiero que tenga el nav bar. */}
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokemons">POKEDEX</NavLink>
          {/* <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokemons/pokemondetail">POKEMON DETAIL</NavLink> */}
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokeitems">POKE ITEMS</NavLink>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/contacto">CONTACTO</NavLink>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/login">LOG IN</NavLink>
          <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/signup">SIGN UP</NavLink>
          <div onClick={showCart} className={openCart ? 'navActive' : 'navInactive'}>
            <CartWidget  />
            {
              openCart ?
              <CartContext />
              :
              null
            }
          </div>
          

        </div>
      </div>
    </>
  )
}

export default NavBar;