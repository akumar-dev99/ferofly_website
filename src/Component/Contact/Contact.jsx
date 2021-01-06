import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <h1 className="contacth1">CONTACT US</h1>
        <div>
          <h4 className="contacth4">
            info@mysite.com &nbsp;&nbsp; &nbsp;&nbsp; / &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp; 500 Terry Francois Street, San Francisco,
            CA 94158 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; / &nbsp;&nbsp;
            &nbsp;&nbsp; Tel: 123-456-7890
          </h4>
        </div>

        <div class="container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
              <input placeholder="Email" type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
              <input
                placeholder="Subject"
                type="subject"
                tabindex="3"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Send
              </button>
            </fieldset>
          </form>
        </div>

        <div className="Mapdiv">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: -1.2884,
              lng: 36.8233,
            }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxDD1g8qWV6giUFvaolp2TWRtX4apSO1g",
})(Contact);

const mapStyles = {
  width: "100%",
  height: "70%  ",
};
