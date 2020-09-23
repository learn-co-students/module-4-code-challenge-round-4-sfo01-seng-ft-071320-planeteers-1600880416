import React from "react";
import Planeteer from "./Planeteer";

const PlaneteersContainer = () => {
  return (
    <ul className="cards">{<Planeteer planeteer={this.props.planeteer} />}</ul>
  );
};

export default PlaneteersContainer;
