import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailReviewMoreState {
  loading: boolean;
  error: string | null;
  //data: any;
 // goodsReviewVO:{ids:any[],goodsId:number}
 initialList:any[];
 reviewMoreList:any[];
 
}

const initialState: DetailReviewMoreState = {
  loading: true,
  error: null,
  initialList:[],
  reviewMoreList:[],
 
  //data: null,
  //goodsReviewVO:{ids:[],goodsId:10700},
};

export const fetchDetailReviewMoreSlice = createAsyncThunk(
  "detailReviewSliceCopy/fetchDetailReviewMoreSlice ",
  async (goodsReviewVO: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/detailReviewMore`,goodsReviewVO
    );
    return data;
  }
);
export const DetailReviewMoreSlice = createSlice({
  name: "detailReviewSliceCopy",
  initialState,
  reducers: {
    clearReviewMoreList: (state, action)=>{
      
      state.reviewMoreList = [];
      console.log("XXXXXXXXX", state.reviewMoreList)
    },
  },
  extraReducers: {
    [fetchDetailReviewMoreSlice.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailReviewMoreSlice.fulfilled.type]: (state, action) => {  
     // debugger;
        if(state.initialList != undefined && state.initialList.length===0 ){
            
            state.initialList = action.payload.data.list;  
            console.log("YYYYYYYYYYY", state.initialList) 
        }else{
            state.reviewMoreList = action.payload.data;  
            console.log("ZZZZZZZZZ", state.reviewMoreList) 
        }
     // state.initialList = action.payload.data.list;
      console.log("ZZZZZZZZZ", state.initialList) 
      state.loading = false;
      state.error = null;
    },
    [fetchDetailReviewMoreSlice.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { clearReviewMoreList} = DetailReviewMoreSlice.actions

  export default DetailReviewMoreSlice.reducer
