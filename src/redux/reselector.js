import { createSelector } from 'reselect'

export const selectedUsersCart = createSelector(
    state => state.otherReducer,
    state => state.sthReducer,
    (addedCart, currentUser) =>
        ({ cart: addedCart, user: currentUser })
)

export const selectedCart = createSelector(
    selectedUsersCart,
    (userCart) => userCart.cart.addedCart.reduce((accumulate, curr) => accumulate + curr.quantity , 0)
)

export const dropDownCart = createSelector(
    [selectedUsersCart],
    (dropDown) => dropDown.cart.dropCart
)

export const currentUserr = createSelector(
    selectedUsersCart,
    current => current.user.currentUser
)

export const addedCartUser = createSelector(
    selectedUsersCart,
    (addedC) => addedC.cart.addedCart
)

export const totalPrice = createSelector(
    selectedUsersCart,
    priceAll => priceAll.cart.addedCart.reduce((accumulate, curr) => accumulate + curr.quantity * curr.price, 0)
)


