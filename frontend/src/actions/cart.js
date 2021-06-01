import axios from 'axios'

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './types'
import { CART_LOCAL_STORAGE_KEY } from '../constants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    const payload = {
        _id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: Number(qty),
    }

    dispatch({ type: CART_ADD_ITEM, payload })

    localStorage.setItem(
        CART_LOCAL_STORAGE_KEY,
        JSON.stringify(getState().cart)
    )
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id })

    localStorage.setItem(
        CART_LOCAL_STORAGE_KEY,
        JSON.stringify(getState().cart)
    )
}
