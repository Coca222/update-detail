import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";


export const DetailTop3: React.FC = () => {
  const toppage2 = useSelector(
    (state: RootState) => state.detailTop.data
  );
  const showMoreReviewBtn = () => {
    const showList = document.getElementsByClassName(
      "pr-comment__more"
    )[0] as HTMLElement;
    showList.style.display = "none";
    const show = document.getElementsByClassName(
      "pr-comment__more-icon"
    )[0] as HTMLElement;
    show.style.display = "none";
    const closeList = document.getElementsByClassName(
      "pr-comment__over"
    )[0] as HTMLElement;
    closeList.style.display = "block";
    closeList.style.display = "inline";
  };
  return toppage2 === null ? (
    <h2>loading</h2>
  ) :(
    <div className="pr-comment-wrap">
      <h3 className="pr-comment-title js-pr-title">
      {toppage2.topAppeal}
      </h3>
      <div className="pr-comment">
        <p className="pr-comment__body js-pr-comment-body is-hidden">
          <span className="pr-comment__option">
            <span className="pr-comment__first">
            {toppage2.topAppealContent}
            </span>
            <span className="js-pr-comment-more pr-comment__more-icon">
              ...
            </span>
            <button
              type="button"
              className="pr-comment__more js-pr-comment-more"
              onClick={showMoreReviewBtn}
            >
              続きを読む
            </button>
            <span className="pr-comment__over js-pr-comment-over is-hidden">
              {" "}
              ～ <br />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};
