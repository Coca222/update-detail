import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailSubGenreState{
loading: boolean;
error: string | null;
data: any;

}

const initialState:DetailSubGenreState= {
loading: true,
error: null,
data: null,

};
 interface JointabelogCategory {
     id:any
 }
 export const fetchDetailSubGenreSlice = createAsyncThunk(
     "detailSubGenre/fetchDetailSubGenreSlice",
    async (jointabelogCategory:JointabelogCategory, thunkAPI) => {
    debugger;

      const { data } = await axios.post(
        `http://localhost:8081/joinTabelogCategory`,{id:jointabelogCategory.id}
      );
      return data;
    }
 );
 export const DetailSubGenreSlice = createSlice({
    name: "detailSubGenre",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailSubGenreSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailSubGenreSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailSubGenreSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  