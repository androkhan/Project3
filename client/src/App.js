import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameHeader from "./pages/components/GameHeader";
import Game from "./pages/GamePages";
import Login from "./pages/LoginPages";
import Nav from "./pages/components/Nav"
import Profile from "./pages/ProfilePages";
import "./App.css";

function App() {
    return (
      <Router> 
        <div>
        <Nav />
        <GameHeader />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Login} />
          <Route exact path="/profile" component= {Profile} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    );
  }

export default App;
