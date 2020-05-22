import React from 'react'
import './cart-dropout.scss'
import CustomButt from "../customButt/customButt";

const CardDropout = () => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButt>Go to checkout</CustomButt>
        </div>
    )
}
export default CardDropout