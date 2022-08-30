import React, {useState} from 'react'

const Counter = ({initial,limit,onAdd}) => {
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

  return (
    <div className="counterWrapper">
      <p>{counter}</p>
      <div className='counterButtons'>
        <button onClick={increaseCounter}> + </button>      
        <button onClick={decreaseCounter}> - </button>      
        {/* <button onClick={() => setCounter(0)}>Reset</button> */}
        <button onClick = {() => onAdd(counter)}>DISPLAY</button>   
      </div>   
    </div>
  )
}

export default Counter