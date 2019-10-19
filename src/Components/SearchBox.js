import React, { Fragment } from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <Fragment>
      <div className="pa2">
        <input
          // Executes searchChange, which has the onSearchChange method from App class
          onChange={searchChange}
          className="pa3 ba b--black bg-lightest-blue"
          type="search"
          placeholder="Search a robot"
        ></input>
      </div>
    </Fragment>
  );
};

export default SearchBox;
