import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export class Menu extends Component {
  render() {
    return (
      <>
          <NavLink exact activeClassName="active_class" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/About">
            About
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/Rooms">
            Rooms
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/Services">
            Services
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/Gallery">
            Gallery
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/SeeDo">
            See&Do
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/Contact">
            Contact
          </NavLink>
          <NavLink exact activeClassName="active_class" to="/BookARoom">
            Book A Room
          </NavLink>
      </>
    );
  }
}

export default Menu;
