import React from 'react';

import CustomButton from '../button/button';

import './cart-dropdown.scss';

const CartDropdown=()=>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;

