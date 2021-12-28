import React from "react";

interface IProps {
  data: {
    flag: string;
    date: string;
    desc: string;
  };
}

const TimeDataLeft: React.FC<IProps> = ({ data }) => {
  return (
    <li>
      <div className="direction-l">
        <div className="flag-wrapper">
          <span className="hexa"></span>
          <span className="flag">{data.flag}</span>
          <span className="time-wrapper">
            <span className="time">{data.date}</span>
          </span>
        </div>
        <div className="desc">{data.desc}</div>
      </div>
    </li>
  );
};

export default TimeDataLeft;
