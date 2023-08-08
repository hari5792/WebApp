import React from "react";
import classes from'./Header.module.css'
import logo from '../../Assests/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
function Header(props){
    
    return(
       <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onclick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={logo} alt='Food'></img>
        </div>
       </React.Fragment>
    )

}

export default Header;