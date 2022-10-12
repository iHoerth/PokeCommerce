import { createContext, useState } from "react"

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [user,setUser] = useState({})
   
  const addToCart = item => {
    const existsInCart = cart.findIndex(x => x.name === item.name)
    
    if(existsInCart != -1){
      const oldItem = cart.find(x => x.name === item.name)

      const newItem = {
        name: item.name,
        quantity: oldItem.quantity + 1,
        cost: item.cost,
        img: item.sprites.front_default || item.sprites.default,
        poke: item,
      };

      const newCart = cart.slice();
      newCart.splice(existsInCart,1,newItem);
      setCart(newCart);
      
    } else {
      setCart([
        ...cart,
        {
          name: item.name,
          quantity: 1,
          cost: item.cost,
          img: item.sprites.front_default || item.sprites.default,
          poke: item,
        },
      ])
    }
  }
  
  const removeFromCart = item => {
    const existsInCart = cart.findIndex(x => x.name === item.name)
    const cartWithoutItem = cart.filter(item => item !== cart[existsInCart])
    const oldItem = cart.find(x => x.name === item.name)

    if(existsInCart != -1 && oldItem.quantity > 1){
      
      const updateItemQuantity = {
        name: item.name,
        quantity: oldItem.quantity - 1,
        cost: item.cost,
        img: item.sprites.front_default || item.sprites.default,
        poke: item,
      }
      const updateCart = cart.slice(); 
      updateCart.splice(existsInCart,1,updateItemQuantity);  
      setCart(updateCart);
      
    } else {
      setCart([...cartWithoutItem]);
    }
  }
  
  const clearCart = () => {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={[cart, addToCart, removeFromCart, clearCart, user, setUser]}>
          {children}
      </CartContext.Provider>
    </>
    )
  }
  export const CartContext = createContext([])

  export default CartProvider