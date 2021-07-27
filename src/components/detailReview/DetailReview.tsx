import React, { useEffect, useState } from "react";
import "../smDetailPage/SmDetailPage.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDetailReviewMoreSlice,
  clearReviewMoreList,
} from "../../redux/detailReviewSliceCopy/fetchDetailReviewSlice";
import { fetchDetailReviewAddHelpNumSlice } from "../../redux/detailReviewAddHelpNum/detailReviewAddHelpNumSlice";
import { useSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
interface ifProps {
  idx: [];
  id: number;
  writable: true;
  star: number;
  reviewNum: number;
  commentDate: Date;
  title: string;
  content: string;
  picture: number;
  nickName: string;
  goodsName: string;
}

interface pIf {
  data: ifProps[];
}

interface MatchParams {
  goodsId: string;
  // reviewId:string;
  //  goodsReviewVO:any;
}
export const DetailReview: React.FC<pIf> = () => {
  let initialList = useSelector(
    (state: RootState) => state.detailReviewSliceCopy.initialList
  );
  let reviewMoreList = useSelector(
    (state: RootState) => state.detailReviewSliceCopy.reviewMoreList
  );
  let ids = initialList.map((item) => item.id);

  console.log("AAAAAAAAAAAAAAA", reviewMoreList);

  const { goodsId } = useParams<MatchParams>();
  //const { goodsReviewVO } = useParams<MatchParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    //  dispatch(fetchDetailReviewSlice (goodsId));
    if (goodsId != null) {
      dispatch(fetchDetailReviewMoreSlice({ goodsId, 1:1 }));
    }
  }, []);

  const addHelpNum = (e) => {
    let reviewId = e.currentTarget.getAttribute("review-id");
    console.log("HHHHHHHHHHHHHHH", reviewId);
    debugger;
    let flag = false;
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === +reviewId) {
        flag = true;
      }
    }
    if (flag) {
      dispatch(
        fetchDetailReviewAddHelpNumSlice({ reviewId, goodsId})
      );
    } else {
      dispatch(
        fetchDetailReviewAddHelpNumSlice({ reviewId, goodsId, ids })
      );
    }
  };
  const showMoreReviewBtn = () => {
    //console.log("BBBBBBBBBBBBB",ids);
    dispatch(fetchDetailReviewMoreSlice({ ids, goodsId }));
    if (reviewMoreList != []) {
      const showList = document.getElementsByClassName(
        "remain"
      )[0] as HTMLElement;
      showList.style.display = "none";
      const closeList = document.getElementsByClassName(
        "closeReviewMore"
      )[0] as HTMLElement;
      closeList.style.display = "block";
    }
  };

  const showMoreReviewCloseBtn = () => {
    dispatch(clearReviewMoreList(reviewMoreList));
    if (reviewMoreList != []) {
      const showList = document.getElementsByClassName(
        "remain"
      )[0] as HTMLElement;
      showList.style.display = "block";
      const closeList = document.getElementsByClassName(
        "closeReviewMore"
      )[0] as HTMLElement;
      closeList.style.display = "none";
    }
  };

  return initialList === null ? (
    <h2>loading</h2>
  ) : (
    <section
      className="g-grid_item g-sm-block-sm"
      id="js-product-reviews"
      aria-hidden="false"
    >
      <div id="js-replace">
        <input type="hidden" name="productCodePost" value="" />

        <div id="normal-productreview">
          <h2 className="g-h-2 g-h-i p-hd">
            <i className="g-s g-s-comment" aria-hidden="true"></i>
            <span>レビュー</span>
          </h2>

          <div className="p-reviewScore">
            <p className="p-average">
              平均評価<span className="g-digit">4.7</span>
              <span data-score="4.7">
                <span className="g-clip">
                  <img src="http://localhost:8081/goods-img/star.jpg" alt="" />
                  <img src="http://localhost:8081/goods-img/star.jpg" alt="" />
                  <img src="http://localhost:8081/goods-img/star.jpg" alt="" />
                  <img src="http://localhost:8081/goods-img/star.jpg" alt="" />
                  <img src="http://localhost:8081/goods-img/star.jpg" alt="" />
                </span>
              </span>
            </p>
            <p className="g-score">
              <span data-score="4.7"></span>
              {/* <span>(<span id="js-reviews"></span>)</span> */}
            </p>
          </div>
          <p className="g-label-brand g-reviewList_label">
            ピックアップレビュー
          </p>
          <ul className="g-reviewListInitial">
            {initialList.map((detailReviewData, index) => {
              return (
                <li className="g-reviewList_item" key={index}>
                  <div className="g-lg-flow-sm">
                    <p className="g-score">
                      <span data-score="5.0">
                        <span className="g-clip"></span>
                        {/* <span className="g-clip">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">	
                                                </span> */}
                      </span>
                    </p>
                  </div>

                  <p className="g-reviewList_user">
                    <b>{detailReviewData.nickName}</b>さん
                    <span className="g-clip">
                      {detailReviewData.commentDate}
                    </span>
                  </p>
                  <p className="g-reviewList_info">{detailReviewData.title}</p>
                  <p className="g-reviewList_h">{detailReviewData.title}</p>
                  <p>{detailReviewData.content}</p>
                  {/* <p className="g-reviewList_like"><a className="g-link reviewLike0" id="js-hitLike" data-count="0" data="5f157a91791f76004b000099" data-clickable=""><i className="g-s g-s-like-g" aria-hidden="true"></i><span>参考になった（125人）</span></a></p> */}
                  <p className="g-reviewList_like">
                    <a
                      className="g-link reviewLike0"
                      id="js-hitLike"
                      data-count="0"
                      data-clickable=""
                    >
                      <i className="g-s g-s-like-g" aria-hidden="true">
                        <img
                          className="thumUpImg"
                          src="http://localhost:8081/goods-img/thumUp.jpg"
                          alt="Italian Trulli"
                        />
                      </i>
                      <span
                        className="initialHelpNumSpan"
                        review-id={detailReviewData.id}
                        onClick={addHelpNum}
                      >
                        参考になった{detailReviewData.reviewNum}人
                      </span>
                    </a>
                  </p>
                </li>
              );
            })}
            {reviewMoreList.map((detailReviewData, index) => {
              return (
                <li className="g-reviewList_item" key={index}>
                  <div className="g-lg-flow-sm">
                    <p className="g-score">
                      <span data-score="5.0">
                        <span className="g-clip"></span>
                        {/* <span className="g-clip">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">	
                                                </span> */}
                      </span>
                    </p>
                  </div>

                  <p className="g-reviewList_user">
                    <b>{detailReviewData.nickName}</b>さん
                    <span className="g-clip">
                      {detailReviewData.commentDate}
                    </span>
                  </p>
                  <p className="g-reviewList_info">{detailReviewData.title}</p>
                  <p className="g-reviewList_h">{detailReviewData.title}</p>
                  <p>{detailReviewData.content}</p>
                  {/* <p className="g-reviewList_like"><a className="g-link reviewLike0" id="js-hitLike" data-count="0" data="5f157a91791f76004b000099" data-clickable=""><i className="g-s g-s-like-g" aria-hidden="true"></i><span>参考になった（125人）</span></a></p> */}
                  <p className="g-reviewList_like">
                    <a
                      className="g-link reviewLike0"
                      id="js-hitLike"
                      data-count="0"
                      data-clickable=""
                    >
                      <i className="g-s g-s-like-g" aria-hidden="true">
                        <img
                          className="thumUpImg"
                          src="http://localhost:8081/goods-img/thumUp.jpg"
                          alt="Italian Trulli"
                        />
                      </i>
                      <span
                        className="initialHelpNumSpan"
                        review-id={detailReviewData.id}
                        onClick={addHelpNum}
                      >
                        参考になった{detailReviewData.reviewNum}人
                      </span>
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="g-foot-v g-foot-sm"
        id="js-review-more"
        aria-hidden="false"
      >
        <p className="g-align-tc" id="showMoreReviewBtn">
          <a
            className="g-link displaymorereview"
            href="#p-reviewMore"
            role="button"
            aria-expanded="false"
            aria-controls="p-reviewMore"
            data-label="閉じる"
            data-accordion='{"scroll":false}'
          >
            <i className="g-i g-i-arrow-d"></i>
            <span
              id="showMoreLabel"
              onClick={showMoreReviewBtn}
              className="remain"
            >
              レビューをもっと見る<span id="js-reviews-more"></span>
            </span>
          </a>
        </p>
        {/* onClick={() => dispatch(fetchDetailReviewSlice(pageQa+1))} */}
        <p className="g-align-tc" id="closeBtn">
          <a
            className="g-link displaymorereview"
            href="#p-reviewMore"
            role="button"
            aria-expanded="false"
            aria-controls="p-reviewMore"
            data-label="閉じる"
            data-accordion='{"scroll":false}'
          >
            <i className="g-i g-i-arrow-d"></i>
            <span
              id="closeLabel"
              onClick={showMoreReviewCloseBtn}
              className="closeReviewMore"
              style={{ display: "none" }}
            >
              閉じる
            </span>
            {/* onClick={() => dispatch(fetchDetailReviewSlice( ))} */}
            {/* className={reviewMoreList?'_hidden':'unhidden'} */}
          </a>
        </p>
      </div>
    </section>
  );
};
