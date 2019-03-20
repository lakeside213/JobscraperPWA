import React from "react";

export default function Hero(props) {
  return (
    <div
      class="page-hero"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="page-hero-content">
              <h1 class="page-title">User Experience Designer</h1>
              <div class="page-hero-details">
                <span class="item-badge job-type-full-time">Full time</span>
                <span class="entry-location">Richmond, VA</span>
                <span class="entry-company">Google inc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
