import React,{useEffect} from "react";
import{DetailTitle} from "../../components/detailTitle/DetailTitle"
import "./Tabelog.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RouteComponentProps, useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import{fetchDetailTitleSlice} from "../../redux/detailTitle/fetchDetailTitleSlice"
import{fetchDetailGenreSlice } from "../../redux/detailGenreSlice/fetchDetailGenreSlice"
import { DetailGenre } from "../../components";
interface MatchParams {
  id: string;
}



export const Tabelog: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { id } = useParams<MatchParams>();
 // debugger;

    const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailTitleSlice({id}));
    dispatch(fetchDetailGenreSlice({id}));
  }, []);

  return (
    <div className="rst" id="rstdtl_photolst">
    <DetailTitle> </DetailTitle>
    <DetailGenre></DetailGenre>
    </div>
  )

  
};

