import React from "react";
import "./SearchBar.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for products..."
        onChange={handleSearch}
      />
      <button className="search-button" onClick={() => onSearch("")}>
        <MagnifyingGlassIcon style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;
