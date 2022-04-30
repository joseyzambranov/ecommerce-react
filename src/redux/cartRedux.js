import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity;
        },
        sumProduct:(state,action)=>{
            state.quantity -= 1;
            state.products.splice(
                
                state.products.findIndex((item)=>item._id===action.payload),1);
                state.total += action.payload.price?action.payload.price*action.payload.quantity:0;
                
            //state.products[state.products.findIndex((item)=>item._id===action.payload.id)]=action.payload.cart;
        }
    },
});

export const {addProduct,sumProduct}=cartSlice.actions;
export default cartSlice.reducer;