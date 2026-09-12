import "./Navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-icon">{"</>"}</span>
          <span className="logo-text">
            Efooot<span className="logo-suffix">.dev</span>
          </span>
        </div>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>

        <button className="hire-btn">Hire me</button>
      </nav>
    </div>
  );
}