import { combineReducers } from 'redux'

import { productListReducer, productDetailsReducer } from './product'
import cartReducer from './cart'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

export default reducers
