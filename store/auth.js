import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn : false
};

export default createSlice({
    name : "auth",
    initialState,
    reducers : {
        login (state, action) {
            
        },
        register (state, action) {
            
        },
        logout (state, action) {
            
        }
    }
});