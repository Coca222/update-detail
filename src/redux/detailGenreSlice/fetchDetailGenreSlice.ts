import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailGenreState{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailGenreState= {
loading: true,
error: null,
data: null,

};
 interface DetailGenre {
     id:any
 }
 export const fetchDetailGenreSlice = createAsyncThunk(
     "detailGenre/fetchDetailGenreSlice",
    async (restaurantDesc:DetailGenre, thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/restaurantDesc`,{id:restaurantDesc.id}
      );
      return data;
    }
 );
 export const DetailGenreSlice = createSlice({
    name: "detailGenre",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailGenreSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailGenreSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data[0];
        state.loading = false;
        state.error = null;
      },
      [fetchDetailGenreSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  