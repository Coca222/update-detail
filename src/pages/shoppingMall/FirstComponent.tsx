import React from "react";
import {SecondComponent} from"./SecondComponent";

interface ifProps {
  index: string;
  category: any;
  onMouseOverHandler: any;
  onMouseOutHandler: any;
}

export const FirstComponent: React.FC<ifProps> = ({
  index,
  category,
  onMouseOutHandler,
  onMouseOverHandler
}) => {
  return (
    <div
    key={index}
    className="item"
    onMouseOver={onMouseOverHandler}
    onMouseOut={onMouseOutHandler}
  >
    <h3>
      <span>·</span>
      <a href="##">{category.categoryName}</a>
    </h3>
    <div className="item-list">
      <div className="subitem">
        {category.secondLevelCategoryVOS.map(
          (vos2, secondIdx) => {
            return (
              <SecondComponent
                key={secondIdx}
                idx={secondIdx}
                categoryName={vos2.categoryName}
                vos2={vos2}
              ></SecondComponent>
            );
          }
        )}
      </div>
    </div>
  </div>
  );
};