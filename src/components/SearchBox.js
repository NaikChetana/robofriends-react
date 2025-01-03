import React from "react";

export const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lighttest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};
