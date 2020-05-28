import React from 'react'
import './checkOut.scss'
import {connect} from "react-redux";
import {addedCartUser, totalPrice} from "../../redux/reselector";
import {createStructuredSelector} from "reselect";
import CustomButt from "../customButt/customButt";
import {withRouter} from "react-router-dom";
import CheckOutItem from "../checkout-item/checkout-item";
import StripeCheckoutButton from "../stripeCheckout/stripeCheckout";

const CheckOut = ({total, cartItems, history}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    Product
                </div>
                <div className='checkout-block'>
                    Description
                </div>
                <div className='checkout-block'>
                    Quantity
                </div>
                <div className='checkout-block'>
                    Price
                </div>
                <div className='checkout-block'>
                    Remove
                </div>
            </div>

            {
                cartItems.length
                    ? cartItems.map(item => <CheckOutItem key={item.id} item={item}/>)
                    : <div className='bag-empty'>
                        <span >Your bag is empty...</span>
                        <CustomButt onClick={() => history.push('/shop')}>Continue shopping</CustomButt>
                    </div>
            }

            <div className='total'>
                <span>Total:  {total}$</span>
            </div>

            {
                cartItems.length
                    ?
                        <>
                            <div className='text-warning'>
                                * Please use the following test credit crad for payment *
                                <br />
                                4242 4242 4242 4242 - Exp: any future data - CVV: 3 digits
                            </div>
                            <StripeCheckoutButton price={total} />
                        </>
                    : null
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    total: totalPrice,
    cartItems: addedCartUser
})

export default withRouter(connect(mapStateToProps, null)(CheckOut))