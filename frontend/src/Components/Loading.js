/**
 * rendered for loading
 */
import React from "react";
import loaderImage from "../images/loader.gif";
export default function Loading() {
  return (
    <div className="container row">
      <div className="col-sm-12 text-center">
        <img
          src={loaderImage}
          alt="loader"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}
