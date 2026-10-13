import "./Doodles.css";

import laptop from "../../assets/laptop.png";
import coffee from "../../assets/coffee.png";
import arrow from "../../assets/arrow.png";
import point from "../../assets/point.png";
import sparkel from "../../assets/sparkel.png";
import squiggle from "../../assets/squiggle.png";

function Doodles() {
  return (
    <div className="hero-doodles" aria-hidden="true">
      <img className="doodle-image doodle-laptop" src={laptop} alt="" />
      <img className="doodle-image doodle-laptop-right" src={laptop} alt="" />
      <img className="doodle-image doodle-coffee" src={coffee} alt="" />
      <img className="doodle-image doodle-arrow" src={arrow} alt="" />
      <img className="doodle-image doodle-point" src={point} alt="" />
      <img className="doodle-image doodle-point-right" src={point} alt="" />
      <img className="doodle-image doodle-sparkel" src={sparkel} alt="" />
      <img className="doodle-image doodle-squiggle" src={squiggle} alt="" />
    </div>
  );
}

export default Doodles;