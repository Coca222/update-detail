import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchHotGoodsesDataActionCreator } from"../../redux/shoppingMall/fetchHotGoodsesActions"

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
    export const HotGoodses: React.FC<pIf> = ({data}) => {
    //   let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses);
    //   let loading = hotGoodses.loading;
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchHotGoodsesDataActionCreator());
      }, []);
        return (
            <div id="sub_banner">
                    {data.map((goods,idaa) => {
                        return(
                          <div className="hot-image" key={idaa}>
                            <a href={"/smDetailPage/"+ goods.goodsId}>
                                <img src={`http://localhost:8081/${goods.goodsCoverImg}`} alt={goods.goodsName} />
                            </a>
                          </div>
                        );
                    })}
            </div>
        );
    };