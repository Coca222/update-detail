import React from "react";
import "../smDetailPage/SmDetailPage.css";
import "./DetailLeftImage.css";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './fetchDetailLeftImageSlice'

interface ifProps {
  goodsId: number;
  path: string;
}

interface pIf {
  data: ifProps[];
}

export const DetailLeftImage: React.FC<pIf> = ({ data }) => {
  const count = useSelector((state: RootState) => state.detailLeftImage.currentIndex)
  const dispatch = useDispatch()
  const currentImage=data.filter((num,index)=> index===count)[0] as ifProps
  
  console.log(currentImage)

  return data === undefined ? (
    <h2>loading</h2>
  ) : (
    <div className="container">
        {/* {data.map((pic, idp) => {  
         return (  */}
          <div className="mySlides">
                            <div className="numbertext">1 / 3</div>
                            
            <img
              className="slgdemo"
              src={`http://localhost:8081${currentImage.path}`}
              style={{ width: "100%" }}
              alt=""
            />
                        
          </div>
        {/* );
        })}   */}
                                           
      {/* <div className="caption-container">
                        <p id="caption"></p>
                    
      </div> */}
                  
      <div className="row">
        <button className="next" onClick={() => dispatch(decrement())}>❮</button>
        {data.map((pic, idp) => {
          return (
            <div className="column" key={idp}>
                              
              <img
                className="demo cursor"
                src={`http://localhost:8081${pic.path}`}
                style={{ width: "100%" }}
                alt="The Woods"
              />
                              
            </div>
          );
        })}
         <button className="prev" onClick={() => dispatch(increment())}>❯</button>             
      </div>
              
    </div>
  );
};
