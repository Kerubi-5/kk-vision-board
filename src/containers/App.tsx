import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "./About";
import Home from "./Home";
import Goals from "./Goals";
import Timeline from "./Timeline";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
