import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        Adya<span>.</span>

      </div>

      <ul>

        <li>About</li>

        <li>Projects</li>

        <li>Experience</li>

        <li>Contact</li>

      </ul>

      <button className="themeButton">

        <div className="dot"></div>

      </button>

    </nav>
  );
}

export default Navbar;