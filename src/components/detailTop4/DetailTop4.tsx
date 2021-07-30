import React,{ useEffect }  from "react";
import "./detailTop4.css";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";




export const DetailTop4: React.FC = () => {

  const top4 = useSelector(  (state: RootState) => state.topKodawari.data);

  return top4 === null ? (
    <h2>loading</h2>
  ) : (
    <div className="rstdtl-top-kodawari">
          <div className="rstdtl-heading">
            <h3 className="rstdtl-heading__title">お店のこだわり</h3>
          </div>
          <div className="rstdtl-top-kodawari__item">
          {top4.map((list, idp) => {
          return (
              <div className="js-kodawari-cassete rstdtl-top-kodawari__target" data-kodawari-id="1" key={idp}>
                <div className="rstdtl-top-kodawari__contents">
                  <p className="rstdtl-top-kodawari__label rstdtl-top-kodawari__label--other">
                    {list.label}                 </p>
                  <div className="rstdtl-top-kodawari__photo">
                      <img src={`${list.path}`} alt="安心安全の中で忘新年会を楽しもう！" className="loaded" data-was-processed="true"/>
                  </div>
                  <p className="rstdtl-top-kodawari__title">
                    {list.modalTitle}                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
  );
};
