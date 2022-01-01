import React, { useState } from "react";
import classNames from "classnames";

import pt from "../data/pt";
import avakin from "../data/avakin";

interface IState {
  imgState: {
    imgSrc: string;
    msg: string;
    active: boolean;
  };
}

const Museo = () => {
  const [openImg, setOpenImg] = useState<IState["imgState"]>({
    imgSrc: "",
    msg: "",
    active: false,
  });

  const renderImage = (data: any): JSX.Element[] => {
    return data.map((data: any) => {
      return (
        <div
          className="-fx-gal-item"
          onClick={() => handleClick(data.imgSrc, data.msg)}
        >
          <div className="-fx-gal-image-thumb">
            <img src={data.imgSrc} />
          </div>
        </div>
      );
    });
  };

  const handleClick = (img: string, msg: string) => {
    setOpenImg({ imgSrc: img, msg: msg, active: !openImg.active });
  };
  return (
    <>
      <div className="section">
        <div className="section__title">Play together</div>

        <div className="-fx-image-gal">{renderImage(pt)}</div>
        <div className="section__title">Avakin</div>

        <div className="-fx-image-gal">{renderImage(avakin)}</div>
      </div>

      <div
        className={classNames("modal", { active: openImg.active })}
        onClick={() => handleClick("", "")}
      >
        <span className="close">&times;</span>
        <img className="modal-content" src={openImg.imgSrc} />
        <div id="caption">{openImg.msg}</div>
      </div>
    </>
  );
};

export default Museo;
