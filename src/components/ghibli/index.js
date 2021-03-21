/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
// == Import npm
import React, { useEffect } from "react";

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Title from "../Title";
import Home from "../Home";
import Film from "../Film";
import People from "../People";
import Specie from "../Specie";
import Vehicle from "../Vehicle";
import Location from "../Location";

// import Formulaire from "../From";

// == Import

import "./styles.scss";

// == Composant
const Ghibli = () => {
  const routes = [
    {
      path: "/",
      component: Home,
      title: "Home",
    },
    {
      path: "/films",
      component: Film,
      title: "Films",
    },
    {
      path: "/people",
      component: People,
      title: "People",
    },
    {
      path: "/locations",
      component: Location,
      title: "Locations",
    },
    {
      path: "/species",
      component: Specie,
      title: "Species",
    },
    {
      path: "/vehicles",
      component: Vehicle,
      title: "Vehicles",
    },
  ];

  const loadDatas = "https://ghibliapi.herokuapp.com";

  useEffect(() => {
    console.log("je clean tous");
  });

  return (
    <div className="app">
      <Title />
      <Router>
        <ul>
          {routes.map((road) => {
            return (
              <li key={road.title}>
                <Link to={road.path}>{road.title}</Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          {routes.map((road) => {
            return (
              <Route key={road.title} exact path={road.path}>
                <road.component lien={loadDatas} />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

// == Export
export default Ghibli;
