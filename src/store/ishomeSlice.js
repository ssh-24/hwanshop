/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let isHome = createSlice({
    name : '최근 본 상품',
    initialState : true,
    reducers : {
        setIsHome(state, action) {
            let YN = action.payload
            return YN
        }
    }
})

export let { setIsHome } = isHome.actions
export default isHome