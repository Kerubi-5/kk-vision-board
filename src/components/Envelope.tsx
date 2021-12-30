import { useState } from "react";
interface IProps {
  text: {
    message1: string;
    message2: string;
  };
}
const Envelope: React.FC<IProps> = ({ text }) => {
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
        <div className="letter">
          <div>{text.message1}</div>
          <div className="words">{text.message2}</div>
        </div>
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
