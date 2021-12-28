interface IProps {
  data: {
    flag: string;
    date: string;
    desc: string;
  };
}

const TimeDataRight: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <li>
        <div className="direction-r">
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
    </div>
  );
};

export default TimeDataRight;
