import { createContext, useEffect} from "react"
import useLocalStorage from "../Services/useLocalStorage";

const CartProvider = ({children}) => {
  const [cart, setCart] = useLocalStorage('cart',[]);
  const [user,setUser] = useLocalStorage('user',{});
  const [totalInCart,setTotalInCart] = useLocalStorage('totalInCart',0);
   
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

  useEffect(() => {
    const result = cart.reduce((acc,current) => acc + current.quantity,0);
    setTotalInCart(result)
  }, [cart])
  

  return (
    <>
      <CartContext.Provider value={[cart, addToCart, removeFromCart, clearCart, user, setUser,totalInCart]}>
          {children}
      </CartContext.Provider>
    </>
    )
  }
  export const CartContext = createContext([])

  export default CartProvider