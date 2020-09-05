import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
  render() {
    return (
      <div>
        <div className="BusinessList">
          <Business />
          <Business />
          <Business />
          <Business />
          <Business />
          <Business />
        </div>
      </div>
    );
  }
}

export default BusinessList;
