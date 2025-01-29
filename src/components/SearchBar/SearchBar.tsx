import React, { useState } from "react";
import "./SearchBar.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(event) => setQuery(event.target.value)} 
      />
      <button className="search-button" onClick={() => onSearch(query)}>
        <MagnifyingGlassIcon style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;
