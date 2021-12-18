import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={e => searchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
