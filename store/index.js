import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter : 0
};

export default createSlice({
    name : "store",
    initialState,
    reducers : {
        increment (state, action) {
            
        }
    }
});