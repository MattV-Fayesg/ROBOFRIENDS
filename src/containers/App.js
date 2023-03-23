import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import CardList from "../components/cardList/cardList";
import SearchBox from "../components/searchBox/searchBox";
import Scroll from "../components/scroll/scroll";
import "./App.css";
import ErrorBoundary from "../components/errorBoundry";

// NOTE: THE HOOK FUNCTION NAME MUST BE CAPITALIZED!!!
export default function App() {
  //robots is the state and set robots the function that changes the state
  const [robots, setRobots] = useState([]); // <- initial state
  const [searchfield, setSearchfield] = useState(" "); // each one has a state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
      });
  }, []); // use a empty array to useEffect once in the begging

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  if (robots.length > 0) {
    return (
      <div className="tc">
        <MediaQuery maxWidth={767}>
          <h1 className="f2 lh-title grow dib br3 ma3 pa2 shadow-3">
            ROBOFRIENDS
          </h1>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <h1 className="f-headline grow dib br3 ma3 pa2 shadow-3">
            ROBOFRIENDS
          </h1>
        </MediaQuery>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  } else {
    return <h1 className="tc">Loading...</h1>;
  }
}
