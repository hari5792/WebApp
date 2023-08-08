import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from './HeaderCartButton.module.css'
function HeaderCartButton(props){

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+ item.amount
  },0)
  return(
    <button onClick={props.onclick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  );

}

export default HeaderCartButton;