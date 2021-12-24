import { useState } from "react";
const Envelope = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleEnvelope = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={isOpen ? "envelope open" : "envelope close"}
        onClick={toggleEnvelope}
      >
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter"></div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
