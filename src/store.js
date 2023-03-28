import { configureStore } from '@reduxjs/toolkit'
import stock from './store/stockSlice'
import cart from './store/cartSlice'
import user from './store/userSlice'

// 반드시 여기서 export 해줘야함
export default configureStore({
    reducer: {
        cart : cart.reducer,
        stock : stock.reducer,
        user : user.reducer
    }
}) 