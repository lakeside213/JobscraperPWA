import React, { Component } from "react";

class Form extends Component {
  render() {
    let { searchOpen, searchToggler } = this.props;
    return (
      <form
        action="https://www.cssigniter.com/"
        class={`form-filter ${searchOpen ? "form-filter-visible" : ""}`}
      >
        <div class="form-filter-header">
          <a
            href="#"
            class="form-filter-dismiss"
            onClick={e => {
              searchToggler(e);
            }}
          >
            &times;
          </a>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-1 " />
            <div class="col-lg-3 col-xs-12">
              <label for="job-location" class="sr-only">
                Job Location
              </label>
              <div class="search">
                <span class="fa fa-location-arrow" />
                <input type="text" id="job-location" placeholder="Location" />
              </div>
            </div>
            <div class="col-lg-3 col-xs-12">
              <label for="job-category" class="sr-only">
                Job Category
              </label>
              <div class="ci-select">
                <select id="job-category">
                  <option value="0">Category</option>
                  <option value="1">Full Time</option>
                  <option value="2">Part Time</option>
                  <option value="3">Internship</option>
                  <option value="4">Freelance</option>
                  <option value="5">Contract</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-xs-12">
              <button class="btn btn-block" type="submit">
                Search
              </button>
            </div>
            <div class="col-lg-1 " />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
