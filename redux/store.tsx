import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
const store = configureStore({
    reducer:{
        // Add your reducers here
        user:userSlice,
    }
});
export default store;
