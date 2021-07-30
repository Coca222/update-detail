import React, { useEffect } from "react";
import "./DetailTop1.css"
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { fetchDetailSizeSlice } from "../../redux/detailSizeSlice/fetchDetailSizeSlice";
import { useParams } from "react-router-dom";

export const DetailTop1: React.FC = () => {

  const toppage1 = useSelector(
    (state: RootState) => state.detailTop.data
  );

    const showMoreReviewBtn = () => {

          const showList = document.getElementsByClassName(
            "rstdtl-extra-info__more-trigger"
          )[0] as HTMLElement;
          showList.style.display = "none";
          const show= document.getElementsByClassName(
            "hidden"
          )[0] as HTMLElement;
          show.style.display = "none";
          const closeList = document.getElementsByClassName(
            "aaa"
          )[0] as HTMLElement;
          closeList.style.display = "inline-block";
      
      };
  return toppage1 === null ? (
    <h2>loading</h2>
  ) : (
    <div className="rstdtl-extra-info">
      <div id="extra-info" className="rstdtl-extra-info__link-target"></div>
      <div className="rstdtl-heading rstdtl-extra-info__title">
        お店からの大切なお知らせ
      </div>
      <input
        type="radio"
        id="rstdtl-extra-info-more"
        className="rstdtl-extra-info__input"
      />
      <label className="rstdtl-extra-info__label">
        <div className="rstdtl-extra-info__text">
         {toppage1.notice1}
          <br />
          <br />{toppage1.notice2}
          <br />
          <br />
          {toppage1.notice3}
          <br />
          <br />
          {toppage1.notice4}
          <br />
          {toppage1.notice5}<span　className="hidden">...</span>
        </div>
        <p className="rstdtl-extra-info__more-trigger"  onClick={showMoreReviewBtn}>もっと見る</p>
        <div className="aaa" style={{display:"none"}}>
        {toppage1.notice6}
        </div>

      </label>
    </div>
  );
};
