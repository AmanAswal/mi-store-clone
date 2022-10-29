import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider"
import Offers from "./components/Offers";
import Heading from "./components/Heading";

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

import data from "./data/data.json";
import StarProducts from "./components/StarProducts";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text= "STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text= "HOT ACCESSORIES" />
    </Router>
  );
}

export default App;
