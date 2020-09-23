import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const getURL = `http://localhost:4000/planeteers`

class App extends React.Component {

  state = {
    planeteers: [],
    planeteer: {
      name: "",
    },
    inputValue: ""
  }

  componentDidMount(){
    fetch(getURL)
    .then(res => res.json())
    .then(planeteers => {
      this.setState({planeteers})
    })
  }

  handleChange = (e) =>{
    this.setState({
      inputValue: e.target.value
    })
  }

  filterSearch = () =>{
    const filterPlaneteer = this.state.planeteers.filter(planeteer =>{
      return planeteer.name.toLowerCase().include(this.state.inputValue.toLowerCase())
    })
  }

  

  render(){

    return (

      <div>
        <Header />
        <SearchBar
          planeteer={this.state.planeteer}
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          filterSearch={this.filterSearch}
          />
        <RandomButton />
        <PlaneteersContainer
         planeteers={this.state.planeteers}
         handleToggleDetail={this.handleToggleDetail}/>
      </div>
    );
  }

}

export default App;
