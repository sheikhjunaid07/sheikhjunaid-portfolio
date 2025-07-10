import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex flex-column justify-content-center"
      >
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link
                to="/"
                //  className="active"
              >
                {" "}
                {/* className="active"*/}
                <i className="bi bi-house navicon"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="bi bi-person navicon"></i>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <i className="bi bi-person navicon"></i>
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <i className="bi bi-file-earmark-text navicon"></i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <i className="bi bi-images navicon"></i>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <i className="bi bi-hdd-stack navicon"></i>
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="bi bi-envelope navicon"></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
