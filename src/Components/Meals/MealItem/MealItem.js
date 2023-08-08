import { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';
function MealItem(props){

    const cartctx = useContext(CartContext)

    const addToCartHandler = amount=>{
            cartctx.addItem({
                id:props.id,
                name:props.name,
                amount: amount,
                price:props.price
            })

    }
    return <li key={props.id} className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>${props.price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}id={props.id} name={props.name} price={props.price}></MealItemForm>
        </div>
    </li>
}

export default MealItem;