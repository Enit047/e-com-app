import React from 'react'
import './cart-dropout.scss'
import CustomButt from "../customButt/customButt";
import {CartItem} from "../cartItem/cartItem";
import {connect, useDispatch} from "react-redux";
import {createStructuredSelector} from "reselect";
import {addedCartUser} from "../../redux/reselector";
import {withRouter} from "react-router-dom";
import {actionSetDropDown} from "../../redux/actionCreators";

const CardDropout = ({cartItem, history}) => {
    const dispatch = useDispatch()
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItem.length
                    ? cartItem.map(item => <CartItem key={item.id} item={item}/>)
                    : <span>Your bag is empty</span>
                }
            </div>
            <CustomButt onClick={() => {
                history.push('/checkout')
                dispatch(actionSetDropDown(false))
            }}>Go to checkout</CustomButt>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItem: addedCartUser
})

export default withRouter(connect(mapStateToProps, null)(CardDropout))