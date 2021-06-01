import { combineReducers } from 'redux'

import { productListReducer, productDetailsReducer } from './product'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

export default reducers
