import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "../About/About";
import BookRoom from "../BookRoom/BookRoom";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Room from "../Rooms/Room";
import SeeDo from "../SeeDo/SeeDo";
import Services from "../Services/Services";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li>
                <a href="#About">ABOUT</a>
              </li>
              <li>
                <a href="#Rooms">ROOMS</a>
              </li>
              <li>
                <a href="#Services">SERVICES</a>
              </li>
              <li>
                <a href="#Gallery">GALLERY</a>
              </li>
              <li>
                <a href="#SeeDo">SEE & DO</a>
              </li>
              <li>
                <a href="#Contact"> CONTACT</a>
              </li>
              <li>
                <a className="bookbutton" href="#BookARoom">
                  Book A Room
                </a>
              </li>
            </ul>
          </nav>

          <div id="Home">
            <Home />
          </div>

          <div className="About" id="About">
            <About />
          </div>

          <div className="OurRooms" id="Rooms">
            <Room />
          </div>
          <div className="service" id="Services">
            <Services />
          </div>
          <div className="gallery" id="Gallery">
            <Gallery />
          </div>

          <div className="seedo" id="SeeDo">
            <SeeDo />
          </div>
          <div className="contact" id="Contact">
            <Contact />
          </div>
        </div>
      </>
    );
  }
}
