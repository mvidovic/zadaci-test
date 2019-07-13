import React, { Component } from "react";
import FetchData from "./fetchData/FetchData";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route exact path="/:page" component={FetchData} />
      // </Router>
      <div>
        <FetchData />
      </div>
    );
  }
}

export default App;
