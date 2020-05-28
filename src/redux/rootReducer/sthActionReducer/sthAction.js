import {CURRENT_USER, SIGN_OUT} from "../../types";

const initialState = {
    currentUser: null
}

export const sthRootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                currentUser: null
        }
        default: return state
    }
}