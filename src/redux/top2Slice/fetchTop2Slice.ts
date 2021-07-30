import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Top2State {
  loading: boolean;
  error: string | null;
  data: { resultCode: number; message: string; data: any[] };
}

const initialState: Top2State = {
  loading: true,
  error: null,
  data: { resultCode: 0, message: "", data: [] },
};

interface TopImage {
    id:any
}

 export const fetchTop2Creator = createAsyncThunk(
     "detailTops2/fetchTop2Creator",
    async (topImage:TopImage, thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/topImage`,{id:topImage.id}
      );
      return data;
    }
 );
 export const tops2Slice = createSlice({
    name: "detailTops2",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchTop2Creator.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchTop2Creator.fulfilled.type]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      },
      [fetchTop2Creator.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  