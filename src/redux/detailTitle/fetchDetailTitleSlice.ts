import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailTitleState{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailTitleState= {
loading: true,
error: null,
data: null,

};
 interface DetailTitle {
     id:any
 }
 export const fetchDetailTitleSlice = createAsyncThunk(
     "detailTile/fetchDetailTitleSlice",
    async (detailTitle:DetailTitle, thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/detailTitle`,{id:detailTitle.id}
      );
      return data;
    }
 );
 export const DetailTitleSlice = createSlice({
    name: "detailTile",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailTitleSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailTitleSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data[0];
        state.loading = false;
        state.error = null;
      },
      [fetchDetailTitleSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  