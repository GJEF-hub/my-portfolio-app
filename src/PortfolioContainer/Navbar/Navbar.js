import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { active: false };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <section className="navbar-wrapper">
        <nav className="NavbarItems">
          <h2 className="navbar-logo">
            <Link to="/">
              <span>GJ</span>EF
            </Link>
          </h2>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={
                this.state.active ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </div>
          <ul className={this.state.active ? "nav-menu active" : "nav-menu"}>
            <Link to="/works">
              <li className="nav-link" onClick={this.handleClick}>
                <i className="fa-solid fa-person-digging"></i> Works
              </li>
            </Link>

            <Link to="/about-me">
              <li className="nav-link" onClick={this.handleClick}>
                <i class="fa fa-user-o" aria-hidden="true"></i> About Me
              </li>
            </Link>

            <Link to="/blogger">
              <li className="nav-link" onClick={this.handleClick}>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Blog
              </li>
            </Link>
            <Link to="/contact">
              <li className="nav-link" onClick={this.handleClick}>
                <i className="fa-solid fa-address-book"></i> Contact
              </li>
            </Link>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Navbar;
