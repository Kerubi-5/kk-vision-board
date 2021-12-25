import Envelope from "../components/Envelope";

const Goals = () => {
  return (
    <>
      <div className="section">
        <div className="section__title">GOALS</div>
        <div className="envelope-wrapper">
          <Envelope />
          <Envelope />
        </div>
        <div className="envelope-wrapper">
          <Envelope />
          <Envelope />
        </div>
      </div>
    </>
  );
};

export default Goals;
