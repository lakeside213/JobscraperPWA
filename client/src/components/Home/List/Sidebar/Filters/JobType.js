import React, { Component } from "react";

export default function JobType(props) {
  return (
    <div class="widget widget_ci-filters-widget">
      <h3 class="widget-title">Job Type</h3>
      <ul class="item-filters-array">
        <li class="item-filter">
          <input type="checkbox" id="filter-1" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-1">
            <span class="item-filter-tag item-filter-tag-badge">
              Full Time
              <span class="item-filter-tag-bg job-type-full-time" />
            </span>
          </label>
        </li>
        <li class="item-filter">
          <input
            type="checkbox"
            id="filter-2"
            class="checkbox-filter"
            checked
          />
          <label class="checkbox-filter-label" for="filter-2">
            <span class="item-filter-tag item-filter-tag-badge">
              Part Time
              <span class="item-filter-tag-bg job-type-part-time" />
            </span>
          </label>
        </li>
        <li class="item-filter">
          <input type="checkbox" id="filter-3" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-3">
            <span class="item-filter-tag item-filter-tag-badge">
              Freelance
              <span class="item-filter-tag-bg job-type-freelance" />
            </span>
          </label>
        </li>
        <li class="item-filter">
          <input type="checkbox" id="filter-4" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-4">
            <span class="item-filter-tag item-filter-tag-badge">
              Contract
              <span class="item-filter-tag-bg job-type-contract" />
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}
