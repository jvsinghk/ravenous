import React, { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',  //will refer to search term
      location: '', //will refer to location to search near from the location
      sortBy: 'best_match', //will represent the selected sorting option to use
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
      return (
       <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
                {this.renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
        <a>Let's Go</a>
        </div>
       </div>
      )
  }
}

export default SearchBar;
