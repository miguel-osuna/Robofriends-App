import React, { Fragment, Component } from "react";
import CardList from "../Components/CardList.js";
import SearchBox from "../Components/SearchBox.js";
import Scroll from "../Components/Scroll.js";
import ErrorBoundary from "../Components/ErrorBoundary.js";
import "./App.css";

class App extends Component {
  constructor() {
    // React.Component Constructor
    super();
    this.state = {
      robots: [],
      search_field: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    // Adds the text input to search_field
    this.setState({ search_field: event.target.value });

    // Filters the robots object array with the search_field text input
  };

  render() {
    const { robots, search_field } = this.state;
    const filtered_robots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search_field.toLowerCase());
    });

    // Changes the CardList of Robots Searched
    // console.log(filtered_robots);
    return !robots.length ? (
      <div>
        <h1 className="tc"> Loading, please wait</h1>
      </div>
    ) : (
      <Fragment>
        <div className="tc">
          <h1 className="f1"> Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filtered_robots} />
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default App;
