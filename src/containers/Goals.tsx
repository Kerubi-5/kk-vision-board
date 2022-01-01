import { useState } from "react";
import Envelope from "../components/Envelope";

interface IState {
  text: {
    message1: string;
    message2: string;
  }[];
}

const Goals = () => {
  const myText = [
    {
      message1: "Our first goal,",
      message2: "To have a stable job so we can be financially capable",
    },
    {
      message1: "",
      message2: "Message",
    },
    {
      message1: "And another goal",
      message2: "Message ",
    },
    {
      message1: "Last goal",
      message2: "Message 3334442",
    },
  ];
  const [messages, setMessage] = useState<IState["text"]>(myText);

  const renderGoalList = (): JSX.Element[] => {
    return messages.map((data) => {
      return <Envelope text={data} />;
    });
  };
  return (
    <>
      <div className="section">
        <div className="section__title">GOALS</div>
        <div className="envelope-wrapper">{renderGoalList()}</div>
      </div>
    </>
  );
};

export default Goals;
