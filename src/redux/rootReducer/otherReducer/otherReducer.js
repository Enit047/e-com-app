import {ADD_THING_CART, DELETE_CART, DROP_DOWN, REMOVE_ONE_HALF} from "../../types";
import {handlerForAddingCart, handlerForRemoveCart} from "./editionForSomeEctions";

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
            return {
                ...state,
                addedCart: handlerForAddingCart(state.addedCart, action.payload)
            }
        case DELETE_CART:
            const newAddedCart = state.addedCart.filter(({id}) => id !== action.id)
            return {
                ...state,
                addedCart: [...newAddedCart]
            }
        case REMOVE_ONE_HALF:
            return {
                ...state,
                addedCart: handlerForRemoveCart(state.addedCart, action.payload)
            }
        default: return state
    }
}