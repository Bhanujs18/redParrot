import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getProducts = async() => {
const res = await axios.get("http://localhost:3000/");
const data = res.data;
return data;
}

const cartSlice = createSlice({
    name : "cart",
    initialState : {
           products :[],
           quantity : 0,
           totalItems: 0,
    },
    reducers : {
        updateCart : (state , action) => {
            state.products.push(action.payload)
        },
        removeCart : (state, action) => {
                let newProducts = state.products.filter((cur)=>cur.name !== action.payload.name)
                state.products = newProducts;
            
        },
        // clearCart : (state , action) => {

        // }
    }
})

export const {updateCart , removeCart} = cartSlice.actions;
export default cartSlice.reducer;
