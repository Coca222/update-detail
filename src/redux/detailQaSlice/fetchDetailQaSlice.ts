import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailQaState{
  loading: boolean;
  error: string | null;
data: any;
}

const initialState:DetailQaState= {
  loading: true,
  error: null,
data: null,
};

 export const fetchDetailQaSlice = createAsyncThunk(
     "detailQaSlice/fetchDetailQaSlice",
    async (goodsId: string, thunkAPI) => {
      const { data } = await axios.get(
        `http://localhost:8081/detailQa/${goodsId}`
      );
      return data;
    }
 );
 export const DetailQaSlice = createSlice({
    name: "detailQaSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailQaSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailQaSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailQaSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  