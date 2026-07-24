import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Forge <span>AI</span>
      </h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="btn">Get Started</button>
    </nav>
  );
}

export default Navbar;