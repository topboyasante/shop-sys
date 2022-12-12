import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./storeItemsSlice";
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer:{
        shop:shopReducer,
        cart:cartReducer
    }
})