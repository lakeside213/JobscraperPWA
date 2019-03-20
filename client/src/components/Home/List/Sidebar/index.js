import React, { Component } from "react";
import { JobTypeFilter, CompensationFilter } from "./Filters";

class Sidebar extends Component {
  render() {
    let { filterOpen, filterToggler } = this.props;
    return (
      <div className="col-xl-3 col-lg-4 col-xs-12">
        <div
          className={`sidebar-wrap ${filterOpen ? "sidebar-wrap-visible" : ""}`}
        >
          <div className="sidebar-wrap-header">
            <a
              href="#"
              className="sidebar-wrap-dismiss"
              onClick={e => {
                filterToggler(e);
              }}
            >
              &times;
            </a>
          </div>
          <div className="sidebar">
            <JobTypeFilter />
            <CompensationFilter />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
