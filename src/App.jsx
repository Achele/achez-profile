import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/film" element={<SingleMovie />} />
    </Routes>
  );
}

export default App;
