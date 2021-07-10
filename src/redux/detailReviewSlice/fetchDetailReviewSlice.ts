import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailReviewState{
  loading: boolean;
  error: string | null;
data: any;
}

const initialState:DetailReviewState= {
  loading: true,
  error: null,
data: null,
};

 export const fetchDetailReviewSlice = createAsyncThunk(
     "detailReviewSlice/fetchDetailReviewSlice",
    async (goodsId: string, thunkAPI) => {
      const { data } = await axios.get(
        `http://localhost:8081/detailReview/${goodsId}`
      );
      return data;
    }
 );
 export const DetailReviewSlice = createSlice({
    name: "detailReviewSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailReviewSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailReviewSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailReviewSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  