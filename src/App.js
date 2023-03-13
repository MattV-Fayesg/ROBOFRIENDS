import React, { Component } from "react";
import { robots } from "./assets/robots";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";
import "./app.css";

class app extends Component {
  //adding state
  constructor(props) {
    super(props); // calls the constructor // MUST HAVE
    this.state = {
      // describes our app // usually states live here in the parent component
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    // how to update states
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) =>
      robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f-headline grow dib br3 ma3 pa2 shadow-3">
          ROBOFRIENDS
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default app;
