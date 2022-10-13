import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookReducer from "./bookReducer/reducer";

const store = configureStore({
    reducer : {
        books : bookReducer
    }
})

export default store;