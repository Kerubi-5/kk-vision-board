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
  const timeData = {
    data1: {
      flag: "They met",
      date: "May 14, 2020",
      desc: "Kerubi and Tula met at zaky park",
    },
    data2: {
      flag: "Mariin.",
      date: "May 31, 2020",
      desc: "Kerubi and Tula thought of a way to stay in contact with each other, and thus Mariin was born",
    },
    data3: {
      flag: "Tala.",
      date: "July 1, 2020",
      desc: "Tala was born and Kerubi and Tula met again to love",
    },
    data4: {
      flag: "Buddy and Awit",
      date: "July 22, 2020",
      desc: "Kerubi and Tula, was playing Draw Together on an app called Plato and they were having very fun time, and Kerubi made a drawing that Tula made fun of and called it Buddy, now Buddy has been one of their symbols of love that shows persistence even though the world is againts them, In addition Awit was also born in this day",
    },
    data5: {
      flag: "Himig",
      date: "December 18, 2020",
      desc: "Kerubi and Tula's love is growing stronger than ever before, this is the day that Tula confessed her love for Kerubi and they made Himig, as a way to connect even further.",
    },
    data6: {
      flag: "The 6",
      date: "March 16, 2021",
      desc: "wink wink",
    },
    data7: {
      flag: "First game completed",
      date: "June 10, 2021",
      desc: "First game they completed together",
    },
    data8: {
      flag: "Virtual Wedding",
      date: "September 17, 2021",
      desc: "Kerubi and Tula got married :>",
    },
    data9: {
      flag: "Current",
      date: "Current",
      desc: "Let's do this baby",
    },
  };
  return (
    <>
      <div className="container">
        <div className="section__title">
          <p>KK's events and happenings</p>
          <h1>KK's Timeline</h1>
        </div>
      </div>

      <ul className="timeline">
        <TimeDataLeft data={timeData.data1} />
        <TimeDataRight data={timeData.data2} />
        <TimeDataLeft data={timeData.data3} />
        <TimeDataRight data={timeData.data4} />
        <TimeDataLeft data={timeData.data5} />
        <TimeDataRight data={timeData.data6} />
        <TimeDataLeft data={timeData.data7} />
        <TimeDataRight data={timeData.data8} />
        <TimeDataLeft data={timeData.data9} />
      </ul>
    </>
  );
};

export default Timeline;
