import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{fetchDetailQaPagingSlice}from "../detailQaPagingSlice/fetchDetailQaPagingSlice"
import{DetailQa} from "../../components/detailQa/DetailQa"
interface DetailQaQuestionState {
  loading: boolean;
  error: string | null;
  data: any;
 // qaRecord:{question:any,goodsId:number}
 
 page:any;
}

const initialState: DetailQaQuestionState = {
  loading: true,
  error: null,

 page:1,
  data: null,
 // qaRecord:{question:null,goodsId:10700},
};

export const fetchDetailQaQuestionSlice = createAsyncThunk(
  "detailQaQuestionSlice/fetchDetailQaQuestionSlice ",
  async (qaRecord: any,thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/qaInsert`,qaRecord
    );
    debugger;
 
    if(data!=null){
      thunkAPI.dispatch(fetchDetailQaPagingSlice(1));
    }
    return data;
  }
);
export const DetailQaQuestionSlice = createSlice({
  name: "detailQaQuestionSlice",
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [fetchDetailQaQuestionSlice.pending.type]: (state) => {
      debugger;
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailQaQuestionSlice.fulfilled.type]: (state, action) => {  
      debugger;
      state.data= action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [fetchDetailQaQuestionSlice.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      
      state.loading = false;
      state.error = action.payload;
    },
  },
});

