import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishlist(state,action){
            state.push(action.payload)
        },
        removeWishlist(state,action){
           return state.filter(item=>item.id !== action.payload)
        }
    }
})

export const {addWishlist,removeWishlist} =WishlistSlice.actions;
export default WishlistSlice.reducer;
