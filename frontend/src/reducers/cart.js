import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../actions/types'

const reducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ADD_ITEM:
            const existingItem = state.find((item) => item._id === payload._id)
            if (!existingItem) return [...state, payload]

            return state.map((product) =>
                product._id === payload._id ? payload : product
            )
        case CART_REMOVE_ITEM:
            return state.filter((product) => product._id !== payload)
        default:
            return state
    }
}

export default reducer
