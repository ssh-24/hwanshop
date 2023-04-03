/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let watched = createSlice({
    name : '최근 본 상품',
    initialState : JSON.parse(localStorage.getItem('watched')),
    reducers : {
        setWatched(state) {
            // localStorage 에서 가져온 값으로 state 새로 셋팅
            let stateFromLS = JSON.parse(localStorage.getItem('watched'))
            return [...stateFromLS]
        }
    }
})

export let { setWatched } = watched.actions
export default watched