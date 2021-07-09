import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchNewAndRecommendGoodsesDataActionCreator } from"../../redux/shoppingMall/fetchNewAndRecommendGoodsesActions";
import "./ShoppingMall.css";

interface ifProps {
    goodsName: string;
    goodsId: number;
    goodsCoverImg; string;
    goodsIntro: string;
    sellingPrice: BigInteger;
    tag: string;
    } 
interface pIf{
    data:ifProps[];
}
    export const RecommendGoodses: React.FC<pIf> = ({data}) => {
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
      }, []);
        return data === undefined?
            (<h1>data</h1>):(
            <div id="recommend">
            <h2>为你推荐</h2>
            <a href="##" className="more">查看更多{">>"}</a>
                <ul>
                    {data.map((goods,idcc) => {
                        return(
                            <li key={idcc}>
                            <a href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}>
                                <div className="info discount">
                                {goods.tag} 新品
                                </div>
                                <img src={`http://localhost:8081/${goods.goodsCoverImg}`} alt={goods.goodsName} />
                                <p className="name" >{goods.goodsName}</p>
                                <p className="item_price" >{goods.sellingPrice}</p>
                                <p className="counter">猜你喜欢</p>
                                <div className="comment">
                                    <p>新蜂精选</p>
                                    <p>好物也可以不贵</p>
                                </div>
                            </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };