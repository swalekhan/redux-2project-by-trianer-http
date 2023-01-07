import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name:"card",
    initialState:{cardState:false},
    reducers:{
        cardHandler(state){
          state.cardState = ! state.cardState;
        }
    }
})

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;