import React from "react";
import Form from "./Form";
export default function Hero(props) {
  return (
    <div
      className="page-hero page-hero-lg"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="page-hero-content">
              <h2 className="page-title">
                <span className="text-theme">Work there.</span> Find the dream
                job
                <br /> you’ve always wanted.
              </h2>
              <p className="page-subtitle">
                <span className="text-theme">405</span> new jobs in the last
                <span className="text-theme">7</span> days. Search now.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Form
        searchOpen={props.searchSidebarOpen}
        searchToggler={props.searchToggler}
      />
    </div>
  );
}
