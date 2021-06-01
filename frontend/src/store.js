import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, enhancers(applyMiddleware(thunk)))

export default store
