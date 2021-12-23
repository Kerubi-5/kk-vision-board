import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "./About";
import Home from "./Home";
import Test from "./Test";
import Test2 from "./Test2";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </div>
  );
}

export default App;
