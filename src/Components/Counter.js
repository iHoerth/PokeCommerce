import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Counter = ({poke,style = {fontSize:'32px',position:'absolute'},isHover}) => {
  const [cart,addToCart,removeFromCart] = useContext(CartContext)
  const [styleOn, setStyleOn] = useState(false);

  const getQuantity = () => {
   const productInCart = cart.find(ele => ele.name === poke.name)
   if(productInCart !== undefined){
     return productInCart.quantity;
   } else {
    return 0;
   }
  }

  useEffect(() => {
    if(getQuantity() >= 1){
      setStyleOn(true);
    } else {
      setStyleOn(false);
    }
  }, [cart])
  
  useEffect(() => {
    switch(isHover){
      case true:
        setStyleOn(true);
        break;
      case false:
        if(getQuantity() < 1){
          setStyleOn(false);
          break;
        }
    }
  }, [isHover])

  return (
    <div id="detail-counter" style={{opacity: styleOn === true ? '1': null,position:style.position}}>
  
      <RemoveCircleIcon onClick={() => removeFromCart(poke)} style={{color:'#59CE8F',fontSize: style.fontSize, cursor:'pointer'}}/>
      <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {
          cart.find(x => x.name === poke.name) ?
          cart.find(x => x.name === poke.name).quantity + ' U'
          :
          0 + ' U'
        }
      </p>
      <AddCircleIcon onClick={() => addToCart(poke)} style={{color:'#59CE8F',fontSize:style.fontSize, cursor:'pointer'}} />
      
    </div>
  )
}

export default Counter