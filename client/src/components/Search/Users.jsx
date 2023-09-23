import React from "react";

const SearchUsers = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="Search"
        placeholder="Search for friends"
        onChange={(e) => handleSearch(e.target.value)}
        className="conversationsInput"
      ></input>
    </div>
  );
};

export default SearchUsers;
