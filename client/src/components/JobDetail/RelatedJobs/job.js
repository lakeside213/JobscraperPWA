import React from "react";

export default function Job(props) {
  return (
    <div class="item-listing">
      <div class="list-item list-item-sm">
        <div class="list-item-main-info">
          <p class="list-item-title">
            <a href="single-job.html">Lion Tamer</a>
          </p>

          <div class="list-item-meta">
            <a href="#" class="list-item-tag item-badge job-type-full-time">
              Full Time
            </a>
            <span class="list-item-company">Amazing Circus</span>
          </div>
        </div>
      </div>
    </div>
  );
}
