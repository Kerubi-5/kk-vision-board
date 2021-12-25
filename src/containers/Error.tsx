import img from "../assets/peach_goma2.png";

const Error = () => {
  return (
    <>
      <div className="section">
        <div className="section__title">404 ERROR PAGE NOT FOUND</div>
        <div className="section__image grid">
          <img src={img} alt="Peach and Goma" />
        </div>
      </div>
    </>
  );
};

export default Error;
