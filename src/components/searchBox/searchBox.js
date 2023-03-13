import React from "react";

const searchBox = ({ searchField, searchChange }) => {
  return (
    <div className="search-box pa3">
      <input
        className="f3 grow tc ma2 ba b--light-gray br-pill shadow-5 "
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
