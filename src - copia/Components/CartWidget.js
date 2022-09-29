import React from 'react'
import Counter from './Counter'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Provider'
//Este seria un widget similar al de un carrito, donde se supone que vas a poder ver los 6 pokemones que marcaste como favoritos (porque en los juegos podes tener una mano de 6 pokemones)
const CartWidget = () => {
  const [state,setState] = useContext(AppContext);
  const [quantity,setQuantity] = useState(0);

  useEffect(() => {
    const result = state.reduce((acc,current) => acc + current.quantity,0);
    setQuantity(result);
    console.log(quantity,'quantity');
  },[state])
    
  const displayCounter = msg =>{ 
    alert(`Tienes ` + msg + ` pokemones en tu mano actualmente.` );
  }

    return (
      <div className='widgetWrapper'>
        <div className="logoWrapper">
          <img className='logo' src='pokeball.png' alt="logo" />
          <div>MY PKMN</div>
        </div>
        <div className='widgetAmount'>
         {
          quantity
         }
        </div>
      </div>
    )
  }

export default CartWidget
