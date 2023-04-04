/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let watched = createSlice({
    name : '최근 본 상품',
    initialState : JSON.parse(localStorage.getItem('watched')),
    reducers : {
        setWatched(state) {
            // localStorage 에서 가져온 값으로 state 새로 셋팅
            let stateFromLS = JSON.parse(localStorage.getItem('watched')) // 개수 조절 X
            if (stateFromLS == null) return;
            // 4 개만 보여지도록 조절, 제일 나중 값 삭제 후 조절
            if (stateFromLS.length > 4) {
                stateFromLS.pop()
                localStorage.setItem('watched', JSON.stringify(stateFromLS))
            }
            return stateFromLS
        }
    }
})

export let { setWatched } = watched.actions
export default watched