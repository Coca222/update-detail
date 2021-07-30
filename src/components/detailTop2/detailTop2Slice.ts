import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface DetailTop2SliceState {
currentIndex:number;
}

const initialState: DetailTop2SliceState = {
      currentIndex:0,
};

export const fetchDetailTop2Slice = createSlice({
    name: 'detailTop2',
    initialState,
    reducers: {

      clickImage: (state, action)=>{
        state.currentIndex = action.payload
      },
      
      increment: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.currentIndex += 1
        if(state.currentIndex>action.payload-1){
          state.currentIndex=0
        }
      },
      decrement: (state,action) => {
        state.currentIndex -= 1
        if(state.currentIndex<0){
          state.currentIndex=action.payload-1
        }
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.currentIndex += action.payload
      
      },
    },
  })

    export const { increment, decrement, incrementByAmount ,clickImage} = fetchDetailTop2Slice.actions

  export default fetchDetailTop2Slice.reducer