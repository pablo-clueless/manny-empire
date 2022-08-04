import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { CATALOGUE } from '../../assets'
import { setWithKey } from '../../lib'

const initialState = {
    cartItems: CATALOGUE,
    isFavorite: [],
    isSelected: [],
    amount: 0,
    total: 0,
    isLoading: false,
    error: null,
}

export const getCartItems = createAsyncThunk('cart/getItems',async(_, thunkAPI) => {
    try {
        const res = await fetch('')
        const data = await res.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartItems.pending]: state => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.cartItems = payload
        },
        [getCartItems.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        }
    },
    reducers: {
        addToFavorite: (state, { payload }) => {
            const id = payload
            let isItemFavorite = state.isFavorite.find(item => item === id)
            if(!isItemFavorite) {
                state.isFavorite.push(id)
                setWithKey('favorites', state.isFavorite)
            } else return
        },
        removeFromFavorite: (state, { payload }) => {
            const id = payload
            state.isFavorite = state.isFavorite.filter(item => item !== id)
        },
        clearCart: (state) => {
            state.isSelected = []
        },
        removeItem: (state, { payload }) => {
            state.isSelected = state.isSelected.filter(item => item.id !== payload)
        },
        increaseItem: (state, { payload }) => {
            const cartItem = state.isSelected.find(item => item.id === payload)
            cartItem.amount = cartItem.amount + 1
        },
        decreaseItem: (state, { payload }) => {
            const cartItem = state.isSelected.find(item => item.id === payload)
            cartItem.amount = cartItem.amount - 1
        },
        addToCart: (state, { payload }) => {
            const item = state.cartItems.find(item => item.id === payload)
            const inCart = state.isSelected.find(item => item.id === payload)
            if(!inCart) {
                state.isSelected.push(item)
                setWithKey('cart', state.isSelected)
            } else return
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0
            state.isSelected.forEach(item => {
                amount += item.amount
                total += item.price * item.amount
            })
            state.amount = amount
            state.total = total
        }
    }
})

export const { addToFavorite, removeFromFavorite, clearCart, removeItem, increaseItem, decreaseItem, addToCart, calculateTotal } = cartSlice.actions
export default cartSlice.reducer