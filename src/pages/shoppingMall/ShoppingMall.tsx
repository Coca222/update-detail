import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategoriesDataActionCreator } from "../../redux/shoppingMall/fetchCategoriesActions";
import { RootState } from "../../redux/store";
//import { CategoriesState } from "../../redux/shoppingMall/fetchCategoriesReducer";
import "./ShoppingMall.css";
import { EmComponent } from "./EmComponent";
import { Col } from "antd";
import { Carousel } from "../../components/NewBeeCarousel";
import {SecondComponent} from"./SecondComponent";
import {FirstComponent} from"./FirstComponent";
import {HotGoodses} from"./HotGoodses";
import { fetchHotGoodsesDataActionCreator } from"../../redux/shoppingMall/fetchHotGoodsesActions";
import {NewGoodses} from"./NewGoodses";
import {RecommendGoodses} from"./RecommendGoodses";
import {Header} from"./header";
import {Nav} from"./nav";
import {NewBeeFooter} from"./footer";

export const ShoppingMall: React.FC = () => {
  let categories: any = useSelector((s: RootState) => s.categories);
  let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses.hotGoodsList.data);
  let newGoodses: any = useSelector((s: RootState) => s.newAndRecommendGoodses.newAndRecommendGoodsList.data.newGoodses);
  let recommendGoodses: any = useSelector((s: RootState) => s.newAndRecommendGoodses.newAndRecommendGoodsList.data.recommendGoodses);
  let loading = categories.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCategoriesDataActionCreator());
  }, [])

  const onMouseOverHandler = (e) => {
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("all-sort-list")[0];
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    ); //filter(node => node.className ==="item-list");
    itemList[0].style.display = "block";
    itemList[0].style.top = targetTop - sLTop + "px";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);
    //if(e.target.className === e.currentTarget.className){
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    );
    itemList[0].style.display = "none";
  };

  return categories.loading === true ? (
    <h1>"loading"</h1>
  ) : (
    <div id="content">
      <Header></Header>
      <Nav></Nav>
      <div id="banner">
        <div className="all-sort-list">
          {categories.error != null
            ? "error"
            : categories.categoryList.data.map((category, index) => {
                return (
                 <FirstComponent
                  key = {index}
                  index = {index}
                  category = {category}
                  onMouseOverHandler = {onMouseOverHandler}
                  onMouseOutHandler = {onMouseOutHandler}
                 ></FirstComponent>
                );
              })}
        </div>    
          <Carousel>
          </Carousel>   
     </div>
     <HotGoodses
     data={hotGoodses} 
     ></HotGoodses>
     <NewGoodses
     data={newGoodses} 
     ></NewGoodses>
     <RecommendGoodses
     data={recommendGoodses}
     ></RecommendGoodses>
     <NewBeeFooter></NewBeeFooter>
    </div>
  );
};

