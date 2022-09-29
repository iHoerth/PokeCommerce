import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ContactSupportOutlined } from '@mui/icons-material';

const Counter = ({product,style = {fontSize:'32px'}}) => {
  const [cart,addToCart,removeFromCart,clearCart] = useContext(CartContext)
  const [styleOn, setStyleOn] = useState(false);

  const getQuantity = () => {
   const productInCart = cart.find(ele => ele.name === product.name)
   if(productInCart !== undefined){
     return productInCart.quantity;
   } else {
    return 0;
   }
  }
  
  const handleClick = (operation) => {
    operation(product);
    switch(operation){
      case addToCart:
        setStyleOn(true);
        break;
      case removeFromCart:
        if(getQuantity() === 1){
          setStyleOn(false);
        }
        break;
    }
  }

  useEffect(() => {
    if(getQuantity() >= 1){
      setStyleOn(true);
    } else {
      setStyleOn(false);
    }
  }, [cart])
  

  return (
    <div id="detail-counter" style={{opacity: styleOn === true ? '1': null,}}>
  
      <RemoveCircleIcon onClick={() => handleClick(removeFromCart)} style={{color:'#59CE8F',fontSize: style.fontSize, cursor:'pointer',}}/>
      <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {
          cart.find(x => x.name === product.name) ?
          cart.find(x => x.name === product.name).quantity + ' U'
          :
          0 + ' U'
        }
      </p>
      <AddCircleIcon onClick={() => handleClick(addToCart)} style={{color:'#59CE8F',fontSize:style.fontSize, cursor:'pointer'}} />
      
    </div>
  )
}

export default Counter