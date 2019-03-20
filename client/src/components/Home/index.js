import React, { Component, Fragment } from "react";
import Header from "../Header";
import Hero from "./Hero";
import List from "./List";
class Home extends Component {
  state = {
    isFilterSidebarOpen: false,
    isSearchFormSidebarOpen: false
  };
  filterSidebarToggler = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.setState(prevState => {
      return { isFilterSidebarOpen: !prevState.isFilterSidebarOpen };
    });
  };
  searchFormToggler = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.setState(prevState => {
      return { isSearchFormSidebarOpen: !prevState.isSearchFormSidebarOpen };
    });
  };
  render() {
    let { isFilterSidebarOpen, isSearchFormSidebarOpen } = this.state;
    return (
      <Fragment>
        <Header />
        <Hero
          searchSidebarOpen={isSearchFormSidebarOpen}
          searchToggler={this.searchFormToggler}
          background="/assets/images/hero-1.jpg"
        />
        <List
          filterSidebarOpen={isFilterSidebarOpen}
          filterToggler={this.filterSidebarToggler}
        />
        <div class="mobile-triggers">
          <a
            href="#"
            class="mobile-trigger form-filter-trigger"
            onClick={e => {
              this.searchFormToggler(e);
            }}
          >
            <i class="fa fa-search" /> Search
          </a>

          <a
            href="#"
            class="mobile-trigger sidebar-wrap-trigger"
            onClick={e => {
              this.filterSidebarToggler(e);
            }}
          >
            <i class="fa fa-navicon" /> Filters
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Home;
