import TimeDataLeft from "../components/TimeDataLeft";
import TimeDataRight from "../components/TimeDataRight";

interface IState {
  data: {
    flag: string;
    date: string;
    desc: string;
  }[];
}

const Timeline = () => {
  const timeData: IState = {
    data: [
      {
        flag: "They met",
        date: "May 14, 2020",
        desc: "Kerubi and Tula met at zaky park",
      },
      {
        flag: "Mariin.",
        date: "May 31, 2020",
        desc: "Kerubi and Tula thought of a way to stay in contact with each other, and thus Mariin was born",
      },
      {
        flag: "Tala.",
        date: "July 1, 2020",
        desc: "Tala was born and Kerubi and Tula met again to love",
      },
      {
        flag: "Buddy and Awit",
        date: "July 22, 2020",
        desc: "Kerubi and Tula, was playing Draw Together on an app called Plato and they were having very fun time, and Kerubi made a drawing that Tula made fun of and called it Buddy, now Buddy has been one of their symbols of love that shows persistence even though the world is againts them, In addition Awit was also born in this day",
      },
      {
        flag: "Himig",
        date: "December 18, 2020",
        desc: "Kerubi and Tula's love is growing stronger than ever before, this is the day that Tula confessed her love for Kerubi and they made Himig, as a way to connect even further.",
      },
      {
        flag: "The 6",
        date: "March 16, 2021",
        desc: "wink wink",
      },
      {
        flag: "First game completed",
        date: "June 10, 2021",
        desc: "First game they completed together",
      },
      {
        flag: "Virtual Wedding",
        date: "September 17, 2021",
        desc: "Kerubi and Tula got married :>",
      },
      {
        flag: "Current",
        date: "Current",
        desc: "Let's do this baby",
      },
    ],
  };

  const renderTimeList = (): JSX.Element[] => {
    return timeData.data.map((data, index) => {
      if (index % 2 !== 0) {
        return <TimeDataLeft data={data} />;
      } else {
        return <TimeDataRight data={data} />;
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="section__title">
          <p>KK's events and happenings</p>
          <h1>KK's Timeline</h1>
        </div>
      </div>

      <ul className="timeline">{renderTimeList()}</ul>
    </>
  );
};

export default Timeline;
