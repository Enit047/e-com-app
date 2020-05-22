import {ADD_THING_CART, CURRENT_USER, DROP_DOWN} from "./types";

export const actionSetCurrentUser = (data) => ({type: CURRENT_USER, payload: data})

export const actionSetDropDown = (typeDropDown) => ({type: DROP_DOWN, payload: typeDropDown})

export const addToCard = (data) => ({ type: ADD_THING_CART, payload: data })