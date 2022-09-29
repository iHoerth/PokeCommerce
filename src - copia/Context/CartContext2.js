import { createContext, useState } from "react"

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = item => {
    const existsInCart = cart.findIndex(x => x.id === item.id)
    const newCart = cart.filter(item => item !== cart[existsInCart])
    
    if(existsInCart != -1){
      setCart([
        {
          name: item.name,
          quantity: item.quantity + 1,
          price: item.types[0],
          img: item.sprites.front_default,
        },
        ...newCart,
      ]);
    } else {
      setCart([
          ...cart,
          {
            name: item.name,
            quantity: 1,
            price: item.types[0],
            img: item.sprites.front_default,
          },
      ])
    }
  }
  
  const removeFromCart = item => {
    const existsInCart = cart.findIndex(x => x.id === item.id)
    const newCart = cart.filter(item => item !== cart[existsInCart])
    
    if(existsInCart != -1 && item.quantity > 1){
      setCart([
        {
          name: item.name,
          quantity: item.quantity - 1,
          price: item.types[0],
          img: item.sprites.front_default,
        },
        ...newCart,
      ]);
    } else {
      setCart([...newCart])
    }
  }
  
  const clearCart = () => {
    setCart([]);
  }
  
  return (
    <>
      <CartContext.Provider value={[addToCart, removeFromCart, clearCart]}>
          {children}
      </CartContext.Provider>
    </>
    )
  }

  export const CartContext = createContext()
  export default CartProvider