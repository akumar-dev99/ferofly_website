import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div className="galleryimg">
        <h1 className="h1gallery">GALLERY</h1>
        <img
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
          alt="Girl in a jacket"
          width="32%"
          height="700"
          className="imagesizegallery"
        />
        <img
          src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Girl in a jacket"
          width="32%"
          height="700"
          className="imagesizegallery"
        />
        <img
          src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Girl in a jacket"
          width="32%"
          height="700"
          className="imagesizegallery"
        />
      </div>
    );
  }
}

export default Gallery;
