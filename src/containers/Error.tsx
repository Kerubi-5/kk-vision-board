import img from "../assets/peach_goma2.png";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "404 ERROR";
    return () => {
      document.title = "KK Vision Board";
    };
  }, []);

  return (
    <>
      <div className="section">
        <div className="section__title">
          <h1>404</h1> ERROR PAGE NOT FOUND
        </div>
        <div className="grid">
          <img src={img} alt="Peach and Goma" />
        </div>
      </div>
    </>
  );
};

export default Error;
