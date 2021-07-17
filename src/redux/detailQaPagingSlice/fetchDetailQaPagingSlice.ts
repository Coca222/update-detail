import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailQaPagingState{
    loading: boolean;
    error: string | null;
    data: {list:[],totalCount:number,pageSize:number,totalPage:number,currPage:number};
  
    page:any;
}

const initialState:DetailQaPagingState= {
    loading: true,
    error: null,
    data: {list:[],totalCount:10,pageSize:3,totalPage:4,currPage:1},
    page:1,
};

 export const fetchDetailQaPagingSlice = createAsyncThunk(  
    
     "detailQaPagingSlice/fetchDetailQaPagingSlice ",
    async (page:number, thunkAPI) => {
    debugger;
      const { data } = await axios.post(
                `http://localhost:8081/qaPagingSort`,{page:page}
              );
          return data;
        }
     );

    
          
  
  
 export const DetailQaPagingSlice = createSlice({
    name: "detailQaPagingSlice",
    initialState,
    reducers: {
    
    },
    extraReducers: {
      [fetchDetailQaPagingSlice.pending.type]: (state) => {
    
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailQaPagingSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.page= action.payload.data.currPage;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailQaPagingSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });

    