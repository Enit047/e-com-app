import {combineReducers} from "redux";
import {sthRootReducer} from "./sthActionReducer/sthAction";
import {otherRootReducer} from "./otherReducer/otherReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import reducerForStaticElem from "./reducerForStaticData/reducerForStaticData";
import reducerShopData from "./reducerForStaticData/reducrerStaticShopData";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['otherReducer']
}

const rootReducer = combineReducers({
    sthReducer: sthRootReducer,
    otherReducer: otherRootReducer,
    staticDataElem: reducerForStaticElem,
    shopData: reducerShopData
})

export default persistReducer(persistConfig, rootReducer)
