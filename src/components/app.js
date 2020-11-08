import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home";
import Alumni from "./pages/alumni";
import JoinTeam from "./pages/join-team";
import NoMatch from "./pages/no-match";
import Footer from "./footer/footer";

import AddPlayers from "./players/add-players.component";
import Players from "./players/players.component";
import PlayersList from "./players/players-list.component";

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

              <Route exact path="/players" component={PlayersList} />
              <Route exact path="/add" component={AddPlayers} />
              <Route path="/players/:id" component={Players} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          
        </Router>

        
        <Footer />
      </div>
    );
  }
}
