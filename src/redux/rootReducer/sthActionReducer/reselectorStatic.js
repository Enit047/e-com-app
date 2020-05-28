import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const relectorShopData = state => state.shopData

export const selectorShopData = createSelector(
    [relectorShopData],
    state => state.shopCart
)

export const selectCollection = collectionVal => createSelector(
    [selectorShopData],
    state => state[COLLECTION_ID_MAP[collectionVal]]
)
