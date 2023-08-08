import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
 
  const[cartIsShown,setCartIsShown] = useState(false)
   
  const showCartHandler = ()=>{
   setCartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
      <CartProvider>
        <Header onShowCart={showCartHandler}></Header>
        {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
        <Meals></Meals>
      </CartProvider>
      
    
    
  );
}

export default App;
