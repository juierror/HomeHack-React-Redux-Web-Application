import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Rec from "./Rec";
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link class="navbar-brand" exact to="/">
              HomeDotTech
            </Link>
            <Link class="nav-link" to="/rec" style={{ color: "white" }}>
              For You
            </Link>
          </nav>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/rec" render={() => <Rec />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
