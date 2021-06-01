import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { CART_LOCAL_STORAGE_KEY } from './constants'

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const cartFromStorage = localStorage.getItem(CART_LOCAL_STORAGE_KEY)

const cart = cartFromStorage ? JSON.parse(cartFromStorage) : []

const initailState = { cart }

const store = createStore(
    reducers,
    initailState,
    enhancers(applyMiddleware(thunk))
)

export default store
