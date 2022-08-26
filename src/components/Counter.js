import React, {useState} from 'react'

const Counter = () => {
  const [counter,setCounter] = useState(0);  
  
  const increaseCounter = () => {
    if(counter < 6){
      setCounter(counter + 1)
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
        <button onClick={increaseCounter}>Inc</button>      
        <button onClick={decreaseCounter}>Dec</button>      
        <button onClick={() => setCounter(0)}>Reset</button>   
      </div>   
    </div>
  )
}

export default Counter