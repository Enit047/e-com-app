import React from 'react'
import './checkout-item.scss'
import {useDispatch} from "react-redux";
import {addToCard, removeCart, removeHalf} from "../../redux/actionCreators";

const CheckOutItem = ({item}) => {
    const {price, quantity, name, imageUrl, id} = item
    const dispatch = useDispatch()
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeHalf(item))}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => dispatch(addToCard(item))}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(removeCart(id))}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem