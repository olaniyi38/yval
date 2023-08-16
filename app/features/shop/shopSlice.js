import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [],
    isCartActive: false
}

const shopSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, qty, size } = action.payload
            const occurences = state.cart.filter((cartItem) => cartItem.id === id)
            // const existingItem = state.cart.find((item) => item.itemId === itemId)
            if (occurences.length !== 0) {
                const sameSize = occurences.find((oc) => oc.size === size)
                if (sameSize) {
                    sameSize.qty += qty
                    return
                }
            }
            state.cart.push(action.payload)
            toast.success("Item added")
        },
        removeItem: (state, action) => {
            const { id, size } = action.payload

            state.cart = state.cart.filter((item) => {
                return item.id !== id
            })

            toast.info("Item removed")
        },
        updateItemQuantity: (state, action) => {
            const { id, value } = action.payload
            const existingItem = state.cart.find((cartItem) => cartItem.id === id)
            if (existingItem) {
                existingItem.qty = value
            }
            toast.info("Item upated")
        },
        setCartActive: (state, action) => {
            state.isCartActive = action.payload
        }
    }
})

export const { addItem, setCartActive, removeItem, updateItemQuantity } = shopSlice.actions

export default shopSlice.reducer