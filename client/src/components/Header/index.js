import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header class="header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="mast-head">
                <h1 class="site-logo">
                  <Link to="/">
                    <img src="/assets/images/logo-light.png" alt="" />
                  </Link>
                </h1>
                <div id="mobilemenu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
