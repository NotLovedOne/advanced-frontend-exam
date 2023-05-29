import React from "react";

export function SearchResults({ searchResults }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}
