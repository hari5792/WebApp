import React,{useRef,useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';


function MealItemForm (props){

    const [amountISValid,setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const onSubmitHandler=(event)=>{
            event.preventDefault();

            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber = +enteredAmount;

            if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5)
            {
                setAmountIsValid(false)
                return;
            }

            props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input ref={amountInputRef}label='Amount' input={{id:'amount_'+props.id,type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}></Input>
            <button>+ Add</button>
            {!amountISValid && <p>Please enter a valid amount</p>}
        </form>
    )


}
export default MealItemForm;