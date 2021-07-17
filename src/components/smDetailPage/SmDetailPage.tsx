import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../pages/shoppingMall/header";
import { Nav } from "../../pages/shoppingMall/nav";
import { NewBeeFooter } from "../../pages/shoppingMall/footer";
import { DetailCommodity } from "../detailComodity/DetailCommodity";
import "./SmDetailPage.css";
import { DetailLeftImage } from "../../components/detailLeftImage/DetailLeftImage";
import { RouteComponentProps, useParams } from "react-router-dom";
import { fetchDetailDataActionCreator , newBeeMallDetailSlice} from "../../redux/detailNewBeeMall/fetchDetailLeftImageActions";
import {  useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from "antd";
import { DetailRightImage } from "../detailRightImage";
import { DetailSize } from "../detailSize/DetailSize";
import {DetailQa} from "../../components/detailQa/DetailQa"
import {DetailReview} from "../../components/detailReview/DetailReview"
import { RootState } from "../../redux/store";
interface MatchParams {
  goodsId: string;
}

export const SmDetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  data
) => {
  const { goodsId } = useParams<MatchParams>();

  const loading = useSelector((state) => state.detailNewBeeMall.loading);
  const error = useSelector((state) => state.detailNewBeeMall.error);
  const product = useSelector((state) => state.detailNewBeeMall.data.data);
  const detailSizeData = useSelector((state:RootState) => state.detailSizeSlice.data);
 // const detailQaData = useSelector((state:RootState) => state.detailQaSlice.data);
  const detailQaPagingData = useSelector((state:RootState) => state.detailQaPagingSlice.data.list);
 // const detailReviewData = useSelector((state:RootState) => state.detailReviewSlice.data);
  const initialList = useSelector((state:RootState) => state.detailReviewSliceCopy.initialList);
 // const reviewMoreList = useSelector((state:RootState) => state.detailReviewSliceCopy.reviewMoreList);
 // const reviewList=initialList||reviewMoreList;
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailDataActionCreator(goodsId));
  }, []);
  
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return product === undefined ? (
    <h2>loading</h2>
  ) : (
    <div>
      <Header></Header>
      <div id="detail">
        <Nav></Nav>
        <DetailCommodity></DetailCommodity>
        <div className="intro mt20 w clearfix">
            <div className="left fl" style={{position: 'relative'}}>
              <DetailLeftImage data={product}></DetailLeftImage>
            </div>
               <DetailRightImage></DetailRightImage>
       
            <div id="sizeQAContainer">
	               <div id="innerSizeQAContainer">
                  <DetailSize data={detailSizeData}></DetailSize>
                  <section className="g-grid_item g-sm-block-sm">
                    <DetailQa data={detailQaPagingData}></DetailQa>
                    <DetailReview data={initialList}></DetailReview>
                  </section>
                 </div>
           </div>
        </div>
      </div>
      <NewBeeFooter></NewBeeFooter>
    </div>
  );
};
