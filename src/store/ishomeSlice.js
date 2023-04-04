/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let isHome = createSlice({
    name : '메인화면 여부',
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