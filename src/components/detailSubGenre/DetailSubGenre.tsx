import React, { useEffect } from "react";
import "../smDetailPage/SmDetailPage.css";
import { useDispatch } from "react-redux";
import { fetchDetailSubGenreSlice } from "../../redux/detailSubGenre/fetchDetailSubGenreSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";

interface MatchParams {
  id: string;
}

export const DetailSubGenre: React.FC = () => {
  const tbGenre = useSelector((state: RootState) => state.detailSubGenre.data);
  const { id } = useParams<MatchParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailSubGenreSlice({ id: id }));
  }, []);

  const onMouseOverHandler = (e) => {
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("linktree")[0];
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "linktree__childbox"
    ); //filter(node => node.className ==="item-list");
    itemList[0].style.display = "block";
    itemList[0].style.top = targetTop - sLTop + "px";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);
    //if(e.target.className === e.currentTarget.className){
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "linktree__childbox"
    );
    itemList[0].style.display = "none";
  };

  return tbGenre === null ? (
    <h2>loading</h2>
  ) : (
    <dl className="rdheader-subinfo__item">
      <dt className="rdheader-subinfo__item-title">ジャンル：</dt>
      <dd className="rdheader-subinfo__item-text">
        {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';"  */}
        <div
          className="linktree"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          <div className="linktree__parent">
            <a
              href="https://tabelog.com/rstLst/RC040101/"
              className="linktree__parent-target"
            >
              <span className="linktree__parent-target-text">
                {tbGenre.name1}
              </span>
            </a>
          </div>
          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
                    韓国料理×丸の内・大手町
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/rstLst/RC040101/">
                    韓国料理×東京・日本橋
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                    韓国料理×東京
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
        <div
          className="linktree"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          <div className="linktree__parent">
            <a
              href="https://tabelog.com/rstLst/yakiniku/"
              className="linktree__parent-target"
            >
              <span className="linktree__parent-target-text">
                {tbGenre.name2}
              </span>
            </a>
          </div>
          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/yakiniku/">
                    焼肉×丸の内・大手町
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/rstLst/yakiniku/">
                    焼肉×東京・日本橋
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                    焼肉×東京
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
        <div
          className="linktree"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          <div className="linktree__parent">
            <a
              href="https://tabelog.com/rstLst/izakaya/"
              className="linktree__parent-target"
            >
              <span className="linktree__parent-target-text">
                {tbGenre.name3}
              </span>
            </a>
          </div>
          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/izakaya/">
                    居酒屋×丸の内・大手町
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/rstLst/izakaya/">
                    居酒屋×東京・日本橋
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                    居酒屋×東京
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  );
};
