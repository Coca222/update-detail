import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface DetailLeftImageSliceState {
currentIndex:number;
}

const initialState: DetailLeftImageSliceState = {
      currentIndex:0,
};

export const fetchDetailLeftImageSlice = createSlice({
    name: 'detailLeftImage',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.currentIndex += 1
        if(state.currentIndex>2){
          state.currentIndex=0
        }
      },
      decrement: (state) => {
        state.currentIndex -= 1
        if(state.currentIndex<0){
          state.currentIndex=2
        }
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.currentIndex += action.payload
      
      },
    },
  })

    export const { increment, decrement, incrementByAmount } = fetchDetailLeftImageSlice.actions

  export default fetchDetailLeftImageSlice.reducer