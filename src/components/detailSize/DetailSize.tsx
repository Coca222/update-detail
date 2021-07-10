import React ,{ useEffect } from "react";
import "../smDetailPage/SmDetailPage.css";
import {  useDispatch } from "react-redux";
import{fetchDetailSizeSlice } from "../../redux/detailSizeSlice/fetchDetailSizeSlice"
import {  useParams } from "react-router-dom";

interface ifProps {
    
   goodsId: number,
     color: String,
     size: String,
     material:String,
     weight:String,
     warrantyYear:String,
     setDate:String,
     warpSize:String,
            }
  
  interface pIf {
    data: ifProps[];
  }

  interface MatchParams {
    goodsId: string;
  }
  
export const DetailSize: React.FC<pIf> = ( {data}) => {
   
    console.log("aaaaaaaaaa",data);
    const { goodsId } = useParams<MatchParams>();
    const dispatch = useDispatch()
    useEffect(() => {
        //console.log("in shoppngMall.tsx file ");
        dispatch(fetchDetailSizeSlice (goodsId));
      }, []);

      
   
    return data === null ? (
        <h2>loading</h2>
      ) : (
            <section className="g-block-sm p-spec" id="js-product-spec">
                <h2 className="g-h-2 g-h-i p-hd"><i className="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span></h2>
                <div id="p-specMore" aria-hidden="false" data-accordion-more="">
                    <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals">
                    </ul>
                    <table className="g-table-a js-sku-specs">
                        <tbody>
                            <tr>
                                <th>商品コード</th>
                                <td>{data[0].goodsId}</td>
                            </tr>
                            <tr>
                                <th>カラー</th>
                                <td>{data[0].color}</td>
                            </tr>
                            <tr>
                                <th>サイズ</th>
                                <td>{data[0].size}</td>
                            </tr>
                            <tr>
                                <th>素材</th>
                                <td>{data[0].material}</td>
                            </tr>
                            <tr>
                                <th>重量</th>
                                <td>{data[0].weight}</td>
                            </tr>
                            <tr>
                                <th>保証年数</th>
                                <td>{data[0].warrantyYear}</td>
                            </tr>
                            <tr>
                                <th>組立時間</th>
                                <td>{data[0].setDate}</td>
                            </tr>
                            <tr>
                                <th>梱包サイズ</th>
                                <td>{data[0].warpSize}</td>
                            </tr>
                            {/* hidden="hidden" */}
                            <tr>
                                <th>原産国</th>
                                <td>中国</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    );
  };
  