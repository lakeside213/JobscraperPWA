import React, { Component } from "react";

export default function JobType(props) {
  return (
    <div class="widget widget_ci-filters-widget">
      <h3 class="widget-title">Compensation</h3>
      <ul class="item-filters-array">
        <li class="item-filter">
          <input type="checkbox" id="filter-11" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-11">
            <span class="item-filter-tag">Under $50,000</span>
          </label>
        </li>
        <li class="item-filter">
          <input
            type="checkbox"
            id="filter-22"
            class="checkbox-filter"
            checked
          />
          <label class="checkbox-filter-label" for="filter-22">
            <span class="item-filter-tag">$50,001 - $75,000</span>
          </label>
        </li>
        <li class="item-filter">
          <input type="checkbox" id="filter-33" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-33">
            <span class="item-filter-tag">$75,001 - $100,000</span>
          </label>
        </li>
        <li class="item-filter">
          <input type="checkbox" id="filter-44" class="checkbox-filter" />
          <label class="checkbox-filter-label" for="filter-44">
            <span class="item-filter-tag">Over $100,000</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
