import React, { Component } from "react";
import RelatedJobs from "./RelatedJobs";
class CompanyDetails extends Component {
  render() {
    return (
      <div class="col-xl-3 col-lg-4 col-xs-12">
        <div class="sidebar">
          <aside class="widget widget_ci-apply-button-widget">
            <a href="#" target="_blank" class="btn btn-block">
              Apply for this job
            </a>
          </aside>
          <aside class="widget widget_ci-company-info-widget">
            <h3 class="widget-title">Company Information</h3>

            <div class="card-info">
              <div class="card-info-media">
                <figure class="card-info-thumb">
                  <img src="images/company-logo.jpg" alt="" />
                </figure>

                <div class="card-info-details">
                  <p class="card-info-title">Google Inc.</p>
                  <p class="card-info-link">
                    <a href="#">https://www.google.com</a>
                  </p>

                  <div class="card-info-socials">
                    <a href="#">
                      <i class="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i class="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="card-info-description">
                <p>
                  There’s a lot of opportunity here to work on a wide range of
                  very challenging projects and to grow quickly.
                </p>
              </div>
            </div>
          </aside>
          <RelatedJobs />
        </div>
      </div>
    );
  }
}

export default CompanyDetails;
