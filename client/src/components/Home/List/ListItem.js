import React from "react";
import { Link } from "react-router-dom";
export default function ListItem(props) {
  return (
    <div class="item-listing">
      <div class="list-item list-item-featured">
        <div class="list-item-main-info">
          <p class="list-item-title-eyebrow">Featured</p>

          <p class="list-item-title">
            <Link to="/job">Hardware Design Lead Engineer</Link>
          </p>

          <div class="list-item-meta">
            <a href="#" class="list-item-tag item-badge job-type-full-time">
              Full Time
            </a>
            <span class="list-item-company">Alpha, Inc</span>
          </div>
        </div>

        <div class="list-item-secondary-info">
          <p class="list-item-location">Vienna</p>
          <time class="list-item-time" datetime="2017-01-01">
            3 hours ago
          </time>
        </div>
      </div>
    </div>
  );
}
