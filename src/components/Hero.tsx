import img1 from "../assets/peach_goma1.png";

const Hero = () => {
  return (
    <div className="section">
      <div className="section__header grid">
        <img src={img1} alt="try" />
      </div>
      <div className="section__title">
        <h1>HELLO</h1>
      </div>
      <div className="container">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default Hero;
