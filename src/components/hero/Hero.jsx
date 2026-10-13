import Doodles from "./Doodles";
import DraggableCard from "../DraggableCard/DraggableCard";
import "./Hero.css";
import Highlighter from "../Highlighter/Highlighter";


function Hero() {
  return (
    <section className="hero">
      <Doodles />
      {/* Interactive draggable cards */}

<DraggableCard
  className="card-studies"
  initialPosition={{ left: 200, top: 200 }}
>
  <span className="card-dot"></span>
  <span>
    B.Tech
    <br />
    CSD Student
  </span>
</DraggableCard>

<DraggableCard
  className="card-curious"
  initialPosition={{ left: 880, top: 320 }}
>
  <span className="card-dot"></span>
  <span>
    Curious by
    <br />
    nature
  </span>
</DraggableCard>

<DraggableCard
  className="card-coffee"
  initialPosition={{ left: 300, top: 380 }}
>
  <span className="card-dot"></span>
  <span>Coffee &amp; code</span>
</DraggableCard>



      {/* Main introduction */}

      <div className="hero-content">
        <h1 className="hero-heading">
          Hi, I'm Adya
          <br />
          <span className="hero-role">
            a <Highlighter>Developer</Highlighter>
          </span>
        </h1>

        <p className="hero-description">
          I build thoughtful and efficient
          <br />
          <span>digital experiences.</span>
        </p>

        <div className="scroll-down">
          <p>Scroll to explore</p>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;