import React from 'react'
import Counter from './Counter'
//Este seria un widget similar al de un carrito, donde se supone que vas a poder ver los 6 pokemones que marcaste como favoritos (porque en los juegos podes tener una mano de 6 pokemones)
const PokeWidget = () => {
  return (
    <div className='widgetWrapper'>
      <div className="logoWrapper">
        <img className='logo' src='pokeball.png' alt="logo" />
        <div>MY PKMN</div>
      </div>
      <Counter />
    </div>
  )
}

export default PokeWidget