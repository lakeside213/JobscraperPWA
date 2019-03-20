import React, { Component } from "react";
import ListItem from "./ListItem";
import Sidebar from "./Sidebar";
class List extends Component {
  render() {
    const { filterSidebarOpen, filterToggler } = this.props;
    return (
      <main class="main">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-xs-12">
              <h3 class="section-title">
                <b>405</b> Jobs Found
              </h3>
              <ListItem />
            </div>
            <Sidebar
              filterOpen={filterSidebarOpen}
              filterToggler={filterToggler}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default List;
