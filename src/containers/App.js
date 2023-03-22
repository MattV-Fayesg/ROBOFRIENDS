import React, { Component } from "react";
import MediaQuery from "react-responsive";
import CardList from "../components/cardList/cardList";
import SearchBox from "../components/searchBox/searchBox";
import Scroll from "../components/scroll/scroll";
import "./App.css";
import ErrorBoundary from "../components/errorBoundry";

//Smart Component
class app extends Component {
  //adding state
  constructor(props) {
    super(props); // calls the constructor // MUST HAVE
    this.state = {
      // describes our app // usually states live here in the parent component
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  onSearchChange = (event) => {
    // how to update states
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robots) =>
      robots.name.toLowerCase().includes(searchField.toLowerCase())
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
          <SearchBox searchChange={this.onSearchChange} />
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
}

export default app;
