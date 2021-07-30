import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailTopState{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailTopState= {
loading: true,
error: null,
data: null,

};
 interface TopPage {
     id:any
 }
 export const fetchDetailTopSlice = createAsyncThunk(
     "detailTop/fetchDetailTopSlice ",
    async (topPage:TopPage, thunkAPI) => {
    debugger;

      const { data } = await axios.post(
        `http://localhost:8081/topPage`,{id:topPage.id}
      );
      return data;
    }
 );
 export const DetailTopSlice = createSlice({
    name: "detailTop",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailTopSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailTopSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data[0];
        state.loading = false;
        state.error = null;
      },
      [fetchDetailTopSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  