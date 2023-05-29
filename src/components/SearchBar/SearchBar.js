import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchSearchResults } from "../../service";
import { SearchResults } from "../SearchResults/SearchResults";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      const results = await fetchSearchResults(searchTerm);
      setSearchResults(results);
      history.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
        Search
      </button>

      {searchResults && searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </form>
  );
}
