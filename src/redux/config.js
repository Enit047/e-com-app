import {applyMiddleware, compose, createStore} from "redux";
import rootReducerWithPersist from "./rootReducer/rootReducer";
import logger from "redux-logger";
import {persistStore} from "redux-persist";


export const store = createStore(rootReducerWithPersist, compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export const persistor = persistStore(store)
