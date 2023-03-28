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
            let num = state.findIndex((a)=>{ return a.id === action.payload }) // index를 남겨줌
            state[num].count += 1
        },
        subCount(state, action) {
            let num = state.findIndex((a)=>{ return a.id === action.payload })
            state[num].count -= 1
        },
        addCart(state, action) {
            state.push(action.payload)
        },
        subCart(state, action) {
            // 상품 id와 같지 않은 애들로만 state 변경 (== 삭제)
            return state.filter(cart => cart.id !== action.payload)
        }
    }
})

export let { addCount, subCount, addCart, subCart } = cart.actions
export default cart