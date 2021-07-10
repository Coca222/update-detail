import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailSizeState{
  loading: boolean;
  error: string | null;
data: any;
}

const initialState:DetailSizeState= {
  loading: true,
  error: null,
data: null,
};

 export const fetchDetailSizeSlice = createAsyncThunk(
     "detailSizeSlice/fetchDetailSizeSlice",
    async (goodsId: string, thunkAPI) => {
      const { data } = await axios.get(
        `http://localhost:8081/detailSize/${goodsId}`
      );
      return data;
    }
 );
 export const DetailSizeSlice = createSlice({
    name: "detailSizeSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailSizeSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailSizeSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailSizeSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  