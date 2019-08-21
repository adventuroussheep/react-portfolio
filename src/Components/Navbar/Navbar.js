import React from "react";
import './navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Jacob Haas
        </a>
        <button className="buttonClass">Hello</button>
        <button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>
      </nav>
    );
  }
}

export default Navbar;
