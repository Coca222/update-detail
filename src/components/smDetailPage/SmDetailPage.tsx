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
        </div>
        <div id="sizeQAContainer">
	            <div id="innerSizeQAContainer">
                  <DetailSize></DetailSize>
              </div>
        </div>
      </div>
      <NewBeeFooter></NewBeeFooter>
    </div>
  );
};
