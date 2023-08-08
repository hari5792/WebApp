import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'

function Cart(props){

   const ctx = useContext(CartContext)

   const cartItemRemoveHandler =(id)=>{

   }

   const cartItemAddHandler = item=>{

   }

    const cartItems = <ul key={'a'} className={classes['cart-items']}>{ctx.items.map(items=>(
      <CartItem key={items.id} name={items.name}amount={items.amount} price={items.price} onRemove={cartItemRemoveHandler.bind(null,items.id)} onAdd={cartItemAddHandler.bind(null,items)}></CartItem>
    )
        
    )}</ul>

    return <Modal closeClick={props.onHideCart}>
         {cartItems}
         <div className={classes.total}>
            <span>Total amount</span>
            <span>${ctx.totalAmount}</span>
         </div>
         <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
         </div>
         </Modal>

}

export default Cart;