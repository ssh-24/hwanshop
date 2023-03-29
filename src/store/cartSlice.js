/*eslint-disable*/
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
            let num = state.findIndex((a)=>{ return a.id === action.payload }) // index를 남겨줌
            state[num].count -= 1
        },
        addItem(state, action) {
            let isNew = true
            let item = action.payload
            state.map((a,i)=>{
                // 있던 상품은 카운트만 추가
                if(a.id === item.id){
                    console.log("add Cart 있던거")
                    a.count += item.count
                    isNew = false
                }
            })
            // 새거는 밀어넣어주기 
            if (isNew) {
                console.log("add Cart 새거")
                state.push(item)
            }
        },
        subItem(state, action) {
            let item = action.payload
            // 상품 id와 같지 않은 애들로만 state 변경 ( == 삭제)
            return state.filter(cart => cart.id !== item.id)
        }
    }
})

export let { addCount, subCount, addItem, subItem } = cart.actions
export default cart