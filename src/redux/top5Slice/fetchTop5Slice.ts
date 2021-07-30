import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailTop5State{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailTop5State= {
loading: true,
error: null,
data: null,

};
 interface TopHygiene {
     id:any
 }
 export const fetchDetailTop5Slice = createAsyncThunk(
     "topHygiene/fetchDetailTop5Slice ",
    async (topHygiene:TopHygiene, thunkAPI) => {
    debugger;

      const { data } = await axios.post(
        `http://localhost:8081/topHygiene`,{id:topHygiene.id}
      );
      return data;
    }
 );
 export const DetailTop5Slice = createSlice({
    name: "topHygiene",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailTop5Slice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailTop5Slice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data[0];
        state.loading = false;
        state.error = null;
      },
      [fetchDetailTop5Slice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  