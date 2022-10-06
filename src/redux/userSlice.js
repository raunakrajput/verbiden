import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null, 
        error: null,
        status: false,  
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
           
            
        },
        logout:(state)=>{
            state.user=null;
            state.status=false;
        },
        registerData:(state,action)=>{
            state.user=action.payload; 
        }

    },
});

export const {login,logout,registerData}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export const selectStatus=(state)=>state.user.status;
export default userSlice.reducer;



