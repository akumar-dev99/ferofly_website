import React, { Component } from "react";

export class Room extends Component {
  render() {
    return (
      <div className="roomdiv">
        <h1 className="roomh1">ROOMS</h1>
        <div className="roomimg">
          <div className="box stack-top">
            <h2>OUR ROOMS</h2>
            <p className="roomp">
              “I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.”
            </p>
            <div className="buttondiv">
              <button className="button">Book A Room</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
