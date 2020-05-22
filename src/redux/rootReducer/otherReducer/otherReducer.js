import {ADD_THING_CART, DROP_DOWN} from "../../types";

const initialState = {
    dropCart: false,
    addedCart: []
}

export const otherRootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DROP_DOWN:
            return {
                ...state,
                dropCart: action.payload
            }
        case ADD_THING_CART:
            const sameCard = state.addedCart.find(({id}) => id === action.payload.id)
            const newStateAdded = state.addedCart.filter(({id}) => id !== action.payload.id)
            const newObj = sameCard
                ? {
                    ...sameCard,
                    quantity: sameCard.quantity + 1
                }
                : {
                    ...action.payload,
                    quantity: 1
                }
            return {
                ...state,
                addedCart: [
                    ...newStateAdded,
                    newObj
                ]
            }
        default: return state
    }
}