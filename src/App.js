import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PokemonList from "./components/pokemon-list.component";

class App extends Component {
  render() {
    return (
        <div className="container mt-3">
          <PokemonList></PokemonList>
        </div>
    );
  }
}

export default App;
