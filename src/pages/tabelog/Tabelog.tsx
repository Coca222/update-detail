import React, { useEffect } from "react";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import "./Tabelog.css";
import "../../components/detailTitle/DetailTitle.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RouteComponentProps, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDetailTitleSlice } from "../../redux/detailTitle/fetchDetailTitleSlice";
import { fetchDetailGenreSlice } from "../../redux/detailGenreSlice/fetchDetailGenreSlice";
import { fetchDetailTopSlice } from "../../redux/topSlice/fetchTopSlice";
import { fetchDetailTop4Slice } from "../../redux/top4Slice/fetchTop4Slice";
import { fetchDetailTop5Slice } from "../../redux/top5Slice/fetchTop5Slice";
import { DetailGenre } from "../../components";
import {DetailGuideBar} from "../../components/detailGuideBar/DetailGuideBar"
import {DetailTop1} from "../../components/detailTop1/DetailTop1"
import {DetailTop2} from "../../components/detailTop2/DetailTop2"
import {DetailTop3} from "../../components/detailTop3/DetailTop3"
import { fetchTop2Creator  } from "../../redux/top2Slice/fetchTop2Slice";
import { DetailTop4  } from "../../components/detailTop4/DetailTop4"
import { DetailTop5  } from "../../components/detailTop5/DetailTop5"
interface MatchParams {
  id: string;
}

export const Tabelog: React.FC<RouteComponentProps<MatchParams>> = () => {
  const top2 = useSelector((state:RootState) => state.detailTops2.data.data);
  
  const { id } = useParams<MatchParams>();
  // debugger;

  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailTitleSlice({ id }));
    dispatch(fetchDetailGenreSlice({ id }));
    dispatch(fetchDetailTopSlice({ id }));
    dispatch(fetchTop2Creator ({ id }));
    dispatch(fetchDetailTop4Slice ({ id }));
    dispatch(fetchDetailTop5Slice ({ id }));
  }, []);

  return (
    <div id="container">
            
      <div>
                
        <div id="rstdtl-head" className="rstdtl-header-wrap">
                    
          <div className="rstdtl-header">
                        
            <section className="rdheader-info-wrap pillow-header">
                            
              <div className="owner-badge">
                                
                <div className="owner-badge__tooltip-frame">
                                  
                </div>
                              
              </div>
                            
              <div className="rdheader-go-hygiene">              </div>
              <DetailTitle> </DetailTitle>
              <DetailGenre></DetailGenre>
              <DetailGuideBar></DetailGuideBar> 
              <DetailTop1></DetailTop1>
              <span id="shoppr" className="page-link"></span>  
              <DetailTop2 data={top2}></DetailTop2> 
              <DetailTop3></DetailTop3>
              <DetailTop4></DetailTop4> 
              <DetailTop5></DetailTop5>       
            </section>
                      
          </div>
                  
        </div>
              
      </div>
          
    </div>
  );
};
