import PokeWidget from "./PokeWidget";
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='header'>
        <h1>POKEDEX</h1>
        <img src='pokedex-logo.png' alt='pkdx'/>
      </div>
      <div className='NavBar'>
        {/* puse nombres genericos de los items del Navbar porque nose muy bien que estructura tendra el pokedex y no se que quiero que tenga el nav bar. */}
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/">POKEDEX</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokemondetail">POKEMON DETAIL</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/pokeitems">POKE ITEMS</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/contacto">CONTACTO</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/login">LOG IN</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to="/signup">SIGN UP</NavLink>
        <PokeWidget/>

      </div>
    </>
  )
}

export default NavBar;