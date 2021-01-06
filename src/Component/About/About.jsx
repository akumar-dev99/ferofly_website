import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function About() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="aboutmediv">
      <div className="servicerow1">
        <div className="row1">
          <span className="rowp1 ">Check In</span>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
          />
        </div>

        <div className="row1">
          <span className="rowp1 span">Check Out</span>
          <div className="rowinput">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
          />
          </div>
        </div>

        <div className="row1">
          <span className="rowp1">Adult</span>
          <input
            type="number"
            class="size-36"
            value="2"
            min="0"
            max="10"
            step="1"
          />
        </div>

        <div className="row1">
          <span className="rowp1">Kids</span>
          <input
            type="number"
            class="size-36"
            value="2"
            min="0"
            max="10"
            step="1"
          />
        </div>

        <div className="row1">
        <span className="rowp1 searchname">childeren</span>
          <button className="button search">Search</button>
        </div>
      </div>

      <div>
        <h1 className="h1about">ABOUT</h1>
        <p className="aboutpara">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
    </div>
  );
}
