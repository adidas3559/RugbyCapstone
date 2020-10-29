import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home";
import Alumni from "./pages/alumni";
import JoinTeam from "./pages/join-team";
import NoMatch from "./pages/no-match";

export default class App extends Component {

  
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/alumni" component={Alumni} />
              <Route path="/join-team" component={JoinTeam} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          

        </Router>

      </div>
    );
  }
}
