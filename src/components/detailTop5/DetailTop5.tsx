import React,{ useEffect }  from "react";
import "./detailTop5.css";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";




export const DetailTop5: React.FC = () => {
  
  const top5 = useSelector(  (state: RootState) => state.topHygiene.data);
  return top5 === null ? (
    <h2>loading</h2>
  ) : (
    <div className="rstdtl-hygiene">
    <div className="rstdtl-hygiene__link-target" id="hygiene-data"></div>
    <div className="rstdtl-heading">
      <h3 className="rstdtl-heading__title">
        {top5.title}
      </h3>
    </div>
    <table className="rstdtl-hygiene__table">
      <tbody>
        <tr>
          <th>
            <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--instore">
            {top5.instore} 
            </p>
          </th>
          <td>
            <p className="gly-b-check rstdtl-hygiene__data">
            {top5.hygieneData1} 
            </p>
            <p className="gly-b-check rstdtl-hygiene__data">
            {top5.hygieneData2} 
            </p>
          </td>
        </tr>
        <tr>
          <th>
            <p className="rstdtl-hygiene__item-name rstdtl-hygiene__item-name--customer">
            {top5.customer} 
            </p>
          </th>
          <td>
            <p className="gly-b-check rstdtl-hygiene__data">
            {top5.hygieneData3} 
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="rstinfo-edit-navi">
      <div className="rstdtl-notice u-text-notice">
        <p>
        {top5.textNotice1} 
        </p>
        <p>
        {top5.textNotice2a} <a href={`${top5.textNotice2Link}`}>{top5.textNotice2c} </a>{top5.textNotice2d}
        </p>
        <p>
          <a className="icon-b-arrow-orange js-analytics" href={`${top5.textNotice3Link}`}>{top5.textNotice3a}</a>
        </p>
      </div>
    </div>
  </div>
  );
};
