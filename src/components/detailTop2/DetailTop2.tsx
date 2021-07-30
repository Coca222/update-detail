import React,{ useEffect }  from "react";
import "./detailTop2.css";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { decrement, increment, clickImage } from './detailTop2Slice'

interface ifProps {
  id: number;
  path: string;
}

interface pIf {
  data: ifProps[];
}

export const DetailTop2: React.FC<pIf> = ({ data }) => {
  
  const length = useSelector(
    (state: RootState) => state.detailTops2.data.data.length
  );
  const count = useSelector(
    (state: RootState) => state.detailTop2.currentIndex
  );
  const dispatch = useDispatch();
  const currentImage = data.filter(
    (num, index) => index === count
  )[0] as ifProps;
  debugger;
  console.log("aaaaaaaaaaaaaaaaaaaa",currentImage);

  // useEffect(() => {
    
  // }, []);

  return currentImage === undefined ? (
    <h2>loading</h2>
  ) : (
    <div className="p-main-photos js-main-photos rstdtl-top-main-photos">
      <div className="p-main-photos__view">
        <div className="bx-wrapper">
          <div className="bx-viewport">
            <ul className="js-mainphoto-slider p-main-photos__slider">
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src={`${currentImage.path}`}
                  data-was-processed="true"
                />
              </li>
            </ul>
          </div>
          <div className="bx-controls bx-has-controls-direction">
            <div className="bx-controls-direction">
              <a className="bx-prev" onClick={() => dispatch(decrement(length))}>
                Prev
              </a>
              {/* href=""  */}
              <a className="bx-next" onClick={() => dispatch(increment(length))}>
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="js-switch-photo p-main-photos__switch-photo-wrap">
        <ul className="p-main-photos__switch-photo-list">
        {data.map((pic, idp) => {
          return (
          <li className="p-main-photos__switch-photo" key={idp}>
            <a
            onClick={() => dispatch(clickImage(idp))}
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="0"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src={`${pic.path}`}
                className="loaded"
                data-was-processed="true"
                
              />
            </a>
          </li>
           );
          })}
        </ul>
      </div>
    </div>
  );
};
