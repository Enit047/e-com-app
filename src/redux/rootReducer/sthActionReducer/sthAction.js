import {CURRENT_USER} from "../../types";

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
        default: return state
    }
}