import { createSlice } from '@reduxjs/toolkit'

// createSlice 하나하나가 useState 느낌
let cart = createSlice({
    name : '장바구니',
    initialState : [
         {
            id : 0,
            name : "Nike Air Force 1 '07 Low White",
            count : 2
        },
        {
            id : 1,
            name : "New Balance 993 Made in USA Grey",
            count : 1
        }   
    ],
    reducers : {
        addCount(state, action) {
            state[action.payload].count += 1
        },
        subCount(state, action) {
            state[action.payload].count -= 1
        },
        addCart(state, action) {
            let newState = [...state]
            newState.push(action.payload)
            return newState
        }
    }
})

export let { addCount, subCount, addCart } = cart.actions
export default cart