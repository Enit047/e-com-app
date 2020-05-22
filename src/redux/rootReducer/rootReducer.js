import {combineReducers} from "redux";
import {sthRootReducer} from "./sthActionReducer/sthAction";
import {otherRootReducer} from "./otherReducer/otherReducer";

export const rootReducer = combineReducers({
    sthReducer: sthRootReducer,
    otherReducer: otherRootReducer
})
