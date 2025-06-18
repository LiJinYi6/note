import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./modules/counterStore";
const store = configureStore({
    reducer:{
        counter:counterStore
    }
})

export default store;