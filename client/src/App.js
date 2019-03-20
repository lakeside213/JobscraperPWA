import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/job" component={JobDetail} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
