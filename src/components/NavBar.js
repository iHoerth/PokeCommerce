import PokeWidget from "./PokeWidget";

const NavBar = () => {
  return (
    <>
      <div className='header'>
        <h1>POKEDEX</h1>
        <img src='pokedex-logo.png' alt='pkdx'/>
      </div>
      <div className='NavBar'>
        {/* puse nombres genericos de los items del Navbar porque nose muy bien que estructura tendra el pokedex y no se que quiero que tenga el nav bar. */}
        <div className='NavBar_items'>NAVBAR ITEM 1</div>
        <div className='NavBar_items'>NAVBAR ITEM 2</div>
        <div className='NavBar_items'>NAVBAR ITEM 3</div>
        <div className='NavBar_items'>NAVBAR ITEM 4</div>
        <div className='NavBar_items'>LOG IN</div>
        <PokeWidget/>

      </div>
    </>
  )
}

export default NavBar;