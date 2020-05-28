import React from 'react'
import './cartItem.scss'

export const CartItem = ({item: {name, price, quantity, imageUrl}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <div className='name'>{name}</div>
            <div className='price'>
                {quantity} x {price}
            </div>
        </div>
    </div>
)