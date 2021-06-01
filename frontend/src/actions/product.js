import axios from 'axios'

import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from './types'
import { extractErrorMessage } from '../utils'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const response = await axios.get('/api/products')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: extractErrorMessage(error),
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const response = await axios.get(`/api/products/${id}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: extractErrorMessage(error),
        })
    }
}
