import React, { Component } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import {faTripadvisor, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="h1">ferofly</h1>
          <h1 className="Journey">---Magnify your Journey---</h1>
        </div>

        <div className="homeimg">
          <img />
        </div>

        <div class="float">
          <FontAwesomeIcon
            icon={faCommentDots}
            size="2x"
            color="white"
            className="fontawesome1"
          />
        </div>

        <div class="float1">
          <FontAwesomeIcon
            icon={faTripadvisor}
            size="2x"
            color="black"
            className="fontawesome1"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            color="black"
            className="fontawesome1"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="black"
            className="fontawesome1"
          />
        </div>
      </div>
    );
  }
}
