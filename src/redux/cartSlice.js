import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[

        ],
    },
    reducers:{
        addItemToCart(state,{payload}){
            /*Check the Cart, and look for an item which has the same ID as the new Item's ID.*/
            const existingItem = state.cart.find((item)=>item.id === payload.id)
            /*If there's an element of that sort, 
            increase the element's qtyInCart property, and its price property*/
            if(existingItem){
                existingItem.qtyInCart++
                existingItem.totalPrice += payload.price
            }
            else{
                /*If there's no element of that sort,
                Add the new element to the cart (action.payload)*/
                state.cart.push(payload)
            }
        },
        removeFromCart(state,{payload}){
            const newCartAfterDeletion = state.cart.filter(item=>item.id !== payload)
                state.cart = newCartAfterDeletion
        },
        reduceItem(state,{payload}){
            const existingItem = state.cart.find((item)=>item.id === payload)
            if(existingItem.qtyInCart === 1){
                const newCartAfterDeletion = state.cart.filter(item=>item.id !== payload)
                state.cart = newCartAfterDeletion
            }else{
                existingItem.qtyInCart--
                existingItem.totalPrice -= payload.price
            }
            
        },
        increaseItem(state,{payload}){
            /*Check the Cart, and look for an item which has the same ID as the new Item's ID.*/
            const existingItem = state.cart.find((item)=>item.id === payload)
            /*If there's an element of that sort, 
            increase the element's qtyInCart property, and its price property*/
            if(existingItem){
                existingItem.qtyInCart++
                existingItem.totalPrice += payload.price
            }
            else{
                /*If there's no element of that sort,
                Add the new element to the cart (action.payload)*/
                state.cart.push(payload)
            }
        },
        clearCart(state){
            state.cart.splice(0,state.cart.length)
        }

    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer