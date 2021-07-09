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
    export const NewGoodses: React.FC<pIf> = ({data}) => {
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
      }, []);
        return data === undefined?
            (<h1>data</h1>):(
            <div id="flash">
            <h2>新品上线</h2>
                <ul>
                    {data.map((goods,idbb) => {
                        return(
                            <li key={idbb}>
                            <a href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}>
                                <img src={`http://localhost:8081/${goods.goodsCoverImg}`} alt={goods.goodsName} />
                                <p className="name" >{goods.goodsName}</p>
                                <p className="discount" >{goods.goodsIntro}</p>
                                <p className="item_price" >{goods.sellingPrice}</p>
                            </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };