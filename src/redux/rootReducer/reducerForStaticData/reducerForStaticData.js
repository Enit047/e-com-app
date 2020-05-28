import {sections} from "../../../component/directory/original";

const INITIAL_STATE = {
    mainPageCart: sections
}

const reducerForStaticElem = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}

export default reducerForStaticElem