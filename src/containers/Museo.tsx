import React, { useState } from "react";
import classNames from "classnames";

interface IState {
  imgState: {
    imgSrc: string;
    active: boolean;
  };
}

const Museo = () => {
  const [openImg, setOpenImg] = useState<IState["imgState"]>({
    imgSrc: "",
    active: false,
  });
  const data = [
    {
      imgSrc: "https://picsum.photos/300/300",
    },
    {
      imgSrc: "https://picsum.photos/300/300",
    },
    {
      imgSrc: "https://picsum.photos/300/300",
    },
    {
      imgSrc: "https://picsum.photos/300/300",
    },
    {
      imgSrc: "https://picsum.photos/300/400",
    },
    {
      imgSrc: "https://picsum.photos/300/400",
    },
  ];

  const renderImage = (): JSX.Element[] => {
    return data.map((data) => {
      return (
        <div className="-fx-gal-item" onClick={() => handleClick(data.imgSrc)}>
          <div className="-fx-gal-image-thumb">
            <img src={data.imgSrc} />
          </div>
        </div>
      );
    });
  };

  const handleClick = (img: string) => {
    setOpenImg({ imgSrc: img, active: !openImg.active });
  };
  return (
    <>
      <div className="section">
        <div className="section__title">Zaky</div>
        <div className="-fx-image-gal">{renderImage()}</div>
      </div>

      <div
        className={classNames("modal", { active: openImg.active })}
        onClick={() => handleClick("")}
      >
        <span className="close">&times;</span>
        <img className="modal-content" src={openImg.imgSrc} />
        <div id="caption">KK</div>
      </div>
    </>
  );
};

export default Museo;
