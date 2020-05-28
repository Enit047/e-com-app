import {ADD_THING_CART, CURRENT_USER, DELETE_CART, DROP_DOWN, REMOVE_ONE_HALF, SIGN_OUT} from "./types";

export const actionSetCurrentUser = (data) => ({type: CURRENT_USER, payload: data})

export const actionSetDropDown = (typeDropDown) => ({type: DROP_DOWN, payload: typeDropDown})

export const addToCard = (data) => ({ type: ADD_THING_CART, payload: data })

export const signOut = () => ({type: SIGN_OUT})

export const removeCart = (id) => ({type: DELETE_CART, id})

export const removeHalf = (item) => ({type: REMOVE_ONE_HALF, payload: item})