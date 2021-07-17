import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailReviewAddHelpNumState {
  loading: boolean;
  error: string | null;
  data: any;
 // qaRecord:{question:any,goodsId:number}
 
 
}

const initialState: DetailReviewAddHelpNumState = {
  loading: true,
  error: null,

 
  data: null,
 // qaRecord:{question:null,goodsId:10700},
};

export const fetchDetailReviewAddHelpNumSlice = createAsyncThunk(
  "detailReviewAddHelpNumSlice/fetchDetailReviewAddHelpNumSlice ",
  async (goodsReviewHelpNum: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/qaInsert`,goodsReviewHelpNum
    );
    return data;
  }
);
export const DetailReviewHelpNumSlice = createSlice({
  name: "detailReviewAddHelpNumSlice",
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [fetchDetailReviewAddHelpNumSlice.pending.type]: (state) => {
      debugger;
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailReviewAddHelpNumSlice.fulfilled.type]: (state, action) => {  
      debugger;
      state.data= action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [fetchDetailReviewAddHelpNumSlice.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      
      state.loading = false;
      state.error = action.payload;
    },
  },
});

