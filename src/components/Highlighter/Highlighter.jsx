import "./Highlighter.css";

function Highlighter({ children }) {
  return (
    <span className="highlight-wrapper">
      <span className="highlight"></span>
      <span className="highlight-text">
        {children}
      </span>
    </span>
  ); 
}

export default Highlighter;