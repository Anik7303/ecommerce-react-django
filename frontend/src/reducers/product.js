import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from '../actions/types'

const initialProductListState = {
    loading: false,
    products: [],
    error: null,
}
const initialProductDetailsState = {
    loading: false,
    product: { reviews: [] },
    error: null,
}

export const productListReducer = (state = initialProductListState, action) => {
    const { type, payload } = action

    switch (type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: payload }
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}
export const productDetailsReducer = (
    state = initialProductDetailsState,
    action
) => {
    const { type, payload } = action

    switch (type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: payload }
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}
