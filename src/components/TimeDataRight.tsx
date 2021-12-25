interface TimeDataProps {
  data: {
    flag: string;
    date: string;
    desc: string;
  };
}

const TimeDataRight = (props: TimeDataProps) => {
  return (
    <div>
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">{props.data.flag}</span>
            <span className="time-wrapper">
              <span className="time">{props.data.date}</span>
            </span>
          </div>
          <div className="desc">{props.data.desc}</div>
        </div>
      </li>
    </div>
  );
};

export default TimeDataRight;
