import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import data from "./data/data.json"
const banner = data.banner;

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start} />
    </Router>
  );
}

export default App;
