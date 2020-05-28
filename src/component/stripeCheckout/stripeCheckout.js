import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100
    const publishableKey = 'pk_test_ho46l6Qf35OwxHd9Ln5bI84d00OsC7xpwt'

    const onHandlerToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Buy in 2 sec'
            name='Bring Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total sum of order is $${price}`}
            amount={stripePrice}
            panelLabel='Pay now'
            token={onHandlerToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton