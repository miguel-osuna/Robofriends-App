import React, { Fragment, Component } from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";

class App extends Component {
  constructor() {
    // React.Component Constructor
    super();
    this.state = {
      robots: robots,
      search_field: ""
    };
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
    console.log(filtered_robots);

    return (
      <Fragment>
        <div className="tc">
          <h1> Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filtered_robots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
