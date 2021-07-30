import React, { useEffect } from "react";
import "../smDetailPage/SmDetailPage.css";
import "../../components/detailTitle/DetailTitle.css";
import { useDispatch } from "react-redux";
import { fetchDetailSubGenreSlice } from "../../redux/detailSubGenre/fetchDetailSubGenreSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";

interface MatchParams {
  id: string;
}

export const DetailSubGenre: React.FC = () => {
  let jointabelogCategory = useSelector(
    (state: RootState) => state.detailSubGenre.data
  );
  const { id } = useParams<MatchParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailSubGenreSlice({ id: id }));
  }, []);

  //debugger;
  let name1;
  const stations1: string[] = [];
  let name2;
  const stations2: string[] = [];
  let name3;
  const stations3: string[] = [];

  if (jointabelogCategory != null) {
    for (let i = 0; i < jointabelogCategory.length; i++) {
      if (jointabelogCategory[i].genreId === 1) {
        name1 = jointabelogCategory[i].name;
        stations1.push(jointabelogCategory[i].station);
      } else if (jointabelogCategory[i].genreId === 2) {
        name2 = jointabelogCategory[i].name;
        stations2.push(jointabelogCategory[i].station);
      } else if (jointabelogCategory[i].genreId === 3) {
        name3 = jointabelogCategory[i].name;
        stations3.push(jointabelogCategory[i].station);
      }
    }
  }

  console.log("************************", name1);
  console.log(stations1);
  console.log("************************", name2);
  console.log(stations2);
  console.log("************************", name3);
  console.log(stations3);
  const onMouseOverHandler = (e) => {
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("linktree")[0];
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().bottom;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "linktree__childbox"
    ); //filter(node => node.className ==="item-list");
    itemList[0].style.display = "block";
    itemList[0].style.top = targetTop - sLTop + "px";
    itemList[0].style.position = "absolute";
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

  return jointabelogCategory === null ? (
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
              <span className="linktree__parent-target-text">{name1}</span>
            </a>
          </div>

          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                {stations1.map((station, idp) => {
                  return (
                    <li className="linktree__childlist-item" key={idp}>
                      <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
                        {name1}×{station}
                      </a>
                    </li>
                  );
                })}
                {/* <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/A1302/rstLst/RC040101/">
                        {name1}×{station}
                      </a>
                    </li>
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                        {name1}×{station}
                      </a>
                    </li> */}
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
                {name2}
              </span>
            </a>
          </div>

          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                {stations2.map((station, idp) => {
                  return (
                    <li className="linktree__childlist-item" key={idp}>
                      <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/yakiniku/">
                        {name2}×{station}
                      </a>
                    </li>
                  );
                })}
                {/* <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/rstLst/yakiniku/">
                    焼肉×東京・日本橋
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                    焼肉×東京
                  </a>
                </li> */}
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
                {name3}
              </span>
            </a>
          </div>

          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist">
                {stations3.map((station, idp) => {
                  return (
                    <li className="linktree__childlist-item" key={idp}>
                      <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/izakaya/">
                        {name3}×{station}
                      </a>
                    </li>
                  );
                })}
                {/* <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/rstLst/izakaya/">
                    居酒屋×東京・日本橋
                  </a>
                </li>
                <li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                    居酒屋×東京
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  );
};
