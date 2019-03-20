import React, { Component, Fragment } from "react";
import Hero from "./hero";
import JobDescription from "./jobDescription";
import CompanyDetails from "./CompanyDetails";
class JobDetail extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <main class="main main-elevated">
          <div class="container">
            <div class="row">
              <JobDescription />
              <CompanyDetails />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default JobDetail;
