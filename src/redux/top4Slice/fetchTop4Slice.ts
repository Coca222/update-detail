import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailTop4State{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailTop4State= {
loading: true,
error: null,
data: null,

};
 interface TopKodawari {
     id:any
 }
 export const fetchDetailTop4Slice = createAsyncThunk(
     "topKodawari/fetchDetailTop4Slice ",
    async (topKodawari:TopKodawari, thunkAPI) => {
    debugger;

      const { data } = await axios.post(
        `http://localhost:8081/topKodawari`,{id:topKodawari.id}
      );
      return data;
    }
 );
 export const DetailTop4Slice = createSlice({
    name: "topKodawari",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailTop4Slice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailTop4Slice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailTop4Slice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  