import React, { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import { ErrorBoundry } from "../components/ErrorBoundry";
import "./App.css";

export const App = () => {
  const [robots$, setRobots] = useState([]);
  const [searchText, setSearchTexts] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchTexts(event.target.value);
  };

  const filteredRobots = robots$.filter((robo) =>
    robo.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return !robots$.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};
