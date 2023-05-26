import { configureStore,createSlice } from "@reduxjs/toolkit";

const salary=createSlice({
    name:'salary',
    initialState:{ salary:0,
    bonus:0 },
    reducers:{
        Increment(state,action){
            state.salary+=10000
        },
        Decrement(state,action){
            state.salary-=1000
        },
        Bonus(state,action){
            state.bonus+=action.payload
        }
    }
})

export  const store=configureStore({
    reducer:salary.reducer
})
export  const actions=salary.actions

