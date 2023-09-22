import React from "react";
// import "./Search.css";

const SearchUsers = ({ handleSearch }) => {
  return (
    <div className="sear">
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
