import Envelope from "../components/Envelope";

const Test = () => {
  return (
    <>
      <div className="envelope-wrapper">
        <Envelope />
        <Envelope />
      </div>
      <div className="envelope-wrapper">
        <Envelope />
        <Envelope />
      </div>
    </>
  );
};

export default Test;
