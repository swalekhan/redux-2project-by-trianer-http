import { createSlice } from "@reduxjs/toolkit";

const cardReducerSlice = createSlice({
    name:"cardReducer",
    initialState:{cardRedState:[], totalAmount:0, totalQuantity:0},
    reducers:{
        addItem(state, actions){
            state.totalQuantity++;
        const totalAmount = state.totalAmount + actions.payload.quantity * actions.payload.price;
         const existItemIndex = state.cardRedState.findIndex((e)=>e.title === actions.payload.title);
         const existItem = state.cardRedState[existItemIndex];
         let updatedItems;
         if(existItem){
            let updatedItem = {
                ...existItem,
                quantity: existItem.quantity + actions.payload.quantity,
            }
          updatedItems = [...state.cardRedState];
          updatedItems[existItemIndex] = updatedItem;
         }else{
            updatedItems = state.cardRedState.concat(actions.payload)
         }
        state.cardRedState = updatedItems;
        state.totalAmount = totalAmount;
        },


        removeItem(state, actions){
            state.totalQuantity--;
            const existItemIndex = state.cardRedState.findIndex((e)=>e.title === actions.payload);
            const existItem = state.cardRedState[existItemIndex];
            const totalAmount = state.totalAmount - existItem.price;
            let updatedItems;
            if(existItem.quantity === 1){
                 updatedItems = state.cardRedState.filter((e)=> e.title !==actions.payload)
            }else{
                let updatedItem ={
                    ...existItem,
                    quantity:existItem.quantity-1,
                }
                updatedItems = [...state.cardRedState];
                updatedItems[existItemIndex] = updatedItem;
            }
            state.cardRedState = updatedItems;
            state.totalAmount = totalAmount;
        }
    }
})

export const cardRedActions =cardReducerSlice.actions;

export default cardReducerSlice.reducer;