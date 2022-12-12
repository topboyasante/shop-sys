import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[

        ],
        totalQuantity:0
    },
    reducers:{
        addItemToCart(state,{payload}){
            /*Check the Cart, and look for an item which has the same ID as the new Item's ID.*/
            const existingItem = state.cart.find((item)=>item.id === payload.id)
            /*If there's an element of that sort, 
            increase the element's qtyInCart property, and its price property*/
            if(existingItem){
                existingItem.qtyInCart ++
                existingItem.price += payload.price
            }
            else{
                /*If there's no element of that sort,
                Add the new element to the cart (action.payload)*/
                state.cart.push(payload)
            }
        },
        removeFromCart(){

        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer