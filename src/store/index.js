import { configureStore } from "@reduxjs/toolkit";
import cardTogleReducer from "./cardTogle";
import cardRedReducer from "./cardReducer";

const store = configureStore({
    reducer: {
        card: cardTogleReducer,
        cardReducer:cardRedReducer,
    }
})


export default store;