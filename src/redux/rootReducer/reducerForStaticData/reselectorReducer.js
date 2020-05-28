import { createSelector } from 'reselect'

const staticData = state => state.staticDataElem
const shopData = state => state.shopData

export const reselectorStatic = createSelector(
    [staticData],
    (stat) => stat.mainPageCart
)

export const reselectorShopData = createSelector(
    [shopData],
    shopD => shopD.shopCart
)

export const createSelectorForPreview = createSelector(
    [reselectorShopData],
    state => Object.keys(state).map(i => state[i])
)

