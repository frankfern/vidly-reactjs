import React from "react";
import Input from "./input";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
