import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{fetchDetailReviewMoreSlice} from "../../redux/detailReviewSliceCopy/fetchDetailReviewSlice"
interface DetailReviewAddHelpNumState {
  loading: boolean;
  error: string | null;
  data: any;
 // qaRecord:{question:any,goodsId:number}
 
 
}

interface GoodsReviewHelpNum {
  goodsId:string;
  ids?:number[];
  reviewId:number;
}

const initialState: DetailReviewAddHelpNumState = {
  loading: true,
  error: null,

 
  data: null,
 // qaRecord:{question:null,goodsId:10700},
};

export const fetchDetailReviewAddHelpNumSlice = createAsyncThunk(
  "detailReviewAddHelpNumSlice/fetchDetailReviewAddHelpNumSlice ",
  async (goodsReviewHelpNum: GoodsReviewHelpNum, thunkAPI) => {
    debugger;
    const { data } = await axios.post(
      `http://localhost:8081/helpNum`,{reviewId:goodsReviewHelpNum.reviewId},{
        headers: {
            'Content-Type': 'application/json',
        }
    }
    );
    console.log(goodsReviewHelpNum.reviewId);
    debugger;
    if(data!=null){
      thunkAPI.dispatch(fetchDetailReviewMoreSlice({ids:goodsReviewHelpNum.ids,goodsId:goodsReviewHelpNum.goodsId}));
    }
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

