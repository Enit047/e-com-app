import {SHOP_DATA} from "../../../serverSide/shopingData";

const INITIAL_STATE = {
    shopCart: SHOP_DATA
}

const reducerShopData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}

export default reducerShopData