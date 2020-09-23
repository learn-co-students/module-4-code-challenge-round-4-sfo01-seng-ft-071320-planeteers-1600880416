import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";
import Planeteer from "./Components/Planeteer";

class App extends React.Component {
  state = {
    planeteers: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({
          planeteers: data,
        });
      });

    const renderPlaneteer = (planeteers) => {
      return planeteers.map((planeteer) => {
        return (
          <Planeteer key={planeteer.id} planeteer={this.state.planeteer} />
        );
      });
    };
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton />
        <PlaneteersContainer renderPlaneteer={this.state.renderPlaneteer} />
      </div>
    );
  }
}

export default App;
