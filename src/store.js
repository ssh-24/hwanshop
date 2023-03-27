import { configureStore, createSlice } from '@reduxjs/toolkit'

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
    ]
})

let stock = createSlice({
    name : '재고',
    initialState : [
        {
            id : 0,
            name : "Nike Air Force 1 '07 Low White",
            count : 10
        },
    
        {
            id : 1,
            name : "New Balance 993 Made in USA Grey",
            count : 10
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
    ]
})

// 반드시 여기서 export 해줘야함
export default configureStore({
    reducer: {
        cart : cart.reducer,
        stock : stock.reducer
    }
}) 