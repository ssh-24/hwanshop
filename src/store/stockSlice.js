import { createSlice } from '@reduxjs/toolkit'

let stock = createSlice({
    name : '재고',
    initialState : [
        {
            id : 0,
            name : "Nike Air Force 1 '07 Low White",
            count : 8
        },
    
        {
            id : 1,
            name : "New Balance 993 Made in USA Grey",
            count : 9
        },
    
        {
            id : 2,
            name : "New Balance 992 Made in USA Navy",
            count : 10
        },
    
        {
            id : 3,
            name : "Jordan 1 x Travis Scott x Fragment Retro Low OG SP Military Blue",
            count : 10
        },
    
        {
            id : 4,
            name : "Asics Gel-Kayano 14 White Midnight",
            count : 10
        },
    
        {
            id : 5,
            name : "Adidas Gazelle Bold Core Black Cloud White",
            count : 10
        },
    
        {
            id : 6,
            name : "Nike Air Force 1 '07 Low Triple Black",
            count : 10
        },
    
        {
            id : 7,
            name : "Jordan 1 Retro High OG Chicago 2022",
            count : 10
        },
    
        {
            id : 8,
            name : "Nike Dunk Low Retro Grey Fog",
            count : 10
        },
    
        {
            id : 9,
            name : "New Balance 574 Legacy Navy",
            count : 10
        },
    
        {
            id : 10,
            name : "New Balance x Stone Island 574 Legacy Green",
            count : 10
        },
    
        {
            id : 11,
            name : "Nike Air Force 1 '07 WB Flax",
            count : 10
        }
    ],
    reducers : {
        addStock(state, action) {
            state[action.payload].count += 1
        },
        subStock(state, action) {
            state[action.payload].count -= 1
        }
    }
})

export let { addStock, subStock } = stock.actions
export default stock