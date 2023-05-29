import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import { Header } from "./components/header/Header";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchPage } from "./components/SearchPage/SearchPage";
import "./App.css";

export function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <main>
      <Header />

      {searchResults.length > 0 && (
        <SearchResults results={searchResults} searchTerm={searchTerm} />
      )}

      <Switch>
        <Route exact path="/search" component={SearchPage} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/search/:searchTerm" component={SearchResults} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
