import { createSlice } from "@reduxjs/toolkit";
import { storeItems } from "../db/storeItems";

const shopItemsSlice = createSlice({
    name:'shopItems',
    initialState:{
        items:storeItems
    },
    reducers:{

    }
})

export const shopActions = shopItemsSlice.actions
export default shopItemsSlice.reducer