import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : '사용자',
    initialState : { name : 'hwan', cash : 300000000, wishList : [] },
    reducers : {
        addCash(state, action) {
            state.cash += action.payload
        },
        subCash(state, action) {
            state.cash -= action.payload
        }
    }
})

export let { addCash, subCash } = user.actions
export default user