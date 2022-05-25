import { createSlice , createEntityAdapter } from "@reduxjs/toolkit";

export const markAdaptor = createEntityAdapter();

const markdownSlice = createSlice({
    name:'markdown',
    initialState:{
        items:[]
    },
    reducers:{
        addText:markAdaptor.addOne
    }
})

export default markdownSlice.reducer;
export const  {addText} = markdownSlice.actions;