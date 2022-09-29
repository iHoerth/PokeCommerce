import React, {useState} from 'react'
import { useContext } from 'react';
import { AppContext } from './Provider';

const Counter = ({initial,limit,onAdd}) => {
  const [state,setState] = useContext(AppContext);
  const [counter,setCounter] = useState(initial);
  
  const increaseCounter = () => {
    if(counter < limit){
      setCounter(counter + 1)
    } else {
      alert('Ya tenes 6 pokemones!')
    }
  }

  const decreaseCounter = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } 
  }

  const add = () => {
    setCounter(counter + 1);
  }

  const substract = () => {
    if(counter > 1){
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counterWrapper">
      <div className='counterButtons'>
        <button className='removeFromCart' onClick={decreaseCounter}> - </button>      
         <p>{counter}</p>
        <button className='addToCart' onClick={increaseCounter}> + </button>      
      </div>   
    </div>
  )
}

export default Counter