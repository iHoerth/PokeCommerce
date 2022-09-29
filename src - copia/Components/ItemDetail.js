import React from 'react'
import Item from './Item'
import {useContext,useState} from 'react'
import {searchPokemon, toTitleCase} from '../Services/Helpers';
import { AppContext } from './Provider';
 


const ItemDetail = ({showDetail,getValues,poke}) => {
  const [counter,setCounter] = useState(0);
  const [state,setState] = useContext(AppContext)

  const checkDuplicate = () => state.some(product => product.name === poke.name); 

  const setQuantity = () => {
    if(checkDuplicate()){
      const newCounter = state.find(ele => ele.name === poke.name).quantity;
      setCounter(newCounter);
      console.log(counter)
    } else {
      setCounter(0);
    }
    console.log(counter)
  }

  const checkQuantity = () => state.find(ele => ele.name === poke.name).quantity;

  const add = () => {
    setQuantity();
    setCounter(counter + 1);
    const newProduct = {
      name: poke.name,
      quantity: counter + 1,
      price: poke.types[0],
      img: poke.sprites.front_default,
    }
    if(!checkDuplicate()){
      setState([...state,newProduct])
    } else {
      const productToIncrement = state.find(ele => ele.name === poke.name);
       
      productToIncrement.quantity ++; //!
      setState(state.slice(4,1))
    }
  }

  const substract = () => {
    if(state.some(ele => ele.name === poke.name)){

      const productToSubstract = state.find(ele => ele.name === poke.name)
      const indexOfProduct = state.indexOf(productToSubstract);

      if(checkQuantity() > 0){
        productToSubstract.quantity--;
        setCounter(productToSubstract.quantity - 1);
      } else {
        state.splice(indexOfProduct,1);
        setState(state);
        setCounter(0);
      }
    }
  }
  
  return (
    
    <div id='itemDetail'>
      <div id='detail-closeModal-container'>
        <div className='detail-types'>
          {
            poke.types.map(type => <img key={poke.id+type} className={'icon-large '+type} src={type+'.svg'} alt='' />)
          }
          <div className='detail-number'># {poke.id}</div>
        </div>
        <div className='detail-title'>
          <div className="detail-text">{toTitleCase(poke.name)}</div>
        </div>
        <div id="detail-closeModal" onClick={showDetail} style={{ cursor:'pointer' }}>X</div>
      </div>


      <div id='detail-pokeContainer'> 
        <div className='detail-description-container'>
          <div className='detail-img-container'> 
            <img className="detail-img" src={poke.sprites.front_default} alt="" />
            <div className='detail-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam earum deleniti, esse excepturi magni amet distinctio quod reiciendis reprehenderit illo, qui quibusdam consequuntur voluptatum veritatis minima odio pariatur facere!
              </p>
            </div>
          </div>

          <div className='detail-img-container'> 
            <img className="detail-img" src={poke.sprites.back_default} alt="" />
            <div className='detail-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam earum deleniti, esse excepturi magni amet distinctio quod reiciendis reprehenderit illo, qui quibusdam consequuntur voluptatum veritatis minima odio pariatur facere!
              </p>
            </div>
          </div>
        </div>

        <div className='detail-evoChain-container'>
          <h3>EVO CHAIN</h3>
          <div className='detail-evoChain-img-container'> 
            <img className="detail-evoChain-img" src={poke.sprites.front_default} alt="" />
            <img className="detail-evoChain-img" src={poke.sprites.front_default} alt="" />
            <img className="detail-evoChain-img" src={poke.sprites.front_default} alt="" />
          </div>
        </div>

      </div>

      <div id="detail-counter">
        <button onClick={substract}>-</button>
        <p>
        { 
          checkDuplicate() ?
          state.find(ele => ele.name === poke.name).quantity
          : counter
        }</p>
        <button onClick={add}>+</button>
        {/* <button onClick={() => addToCart()}>ADD TO CART</button> */}
      </div>
    </div>
  )
}

export default ItemDetail