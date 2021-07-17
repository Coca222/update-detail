import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface DetailQApagingSliceState {
currentPageNum:number;
}

const initialState: DetailQApagingSliceState = {
      currentPageNum:1,
};

export const fetchDetailQApagingSlice = createSlice({
    name: 'detailQa',
    initialState,
    reducers: {

      clickImage: (state, action)=>{
        state.currentPageNum = action.payload
      },
      
      increment: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.currentPageNum += 1
      },
      decrement: (state,action) => {
        state.currentPageNum -= 1
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.currentPageNum += action.payload
      
      },
    },
  })

    export const { increment, decrement, incrementByAmount ,clickImage} = fetchDetailQApagingSlice.actions

  export default fetchDetailQApagingSlice.reducer