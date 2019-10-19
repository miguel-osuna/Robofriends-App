import React, { Fragment, Component } from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";
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
    const filtered_robots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.search_field.toLowerCase());
    });

    // Changes the CardList of Robots Searched
    // console.log(filtered_robots);
    if (this.state.robots.length === 0) {
      return (
        <div>
          <h1 className="tc"> Loading, please wait</h1>
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1"> Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filtered_robots} />
          </div>
        </Fragment>
      );
    }
  }
}

export default App;
