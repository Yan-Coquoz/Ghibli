/* eslint-disable quotes */
// == Import npm
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title";
import Formulaire from "../From";
// import { NavLink, RouterBrowser as Router } from "react-router";

// == Import

import "./styles.scss";

// == Composant
const Ghibli = () => {
  // retour de l'input
  const [search, setSearch] = useState("");
  // destination pour les requetes
  const [direction, setDirection] = useState("");

  const setSearchQuery = () => {
    console.log(search);
  };

  // gestion de l'api
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="app">
      <Title />
      {/* <Formulaire
        onSubmitForm={setSearchQuery}
        inputValue={search}
        onChangeInput={setSearch}
      /> */}
      {/* <Router>
      <NavLink to="/">Home</NavLink>
      <NavLink exact to="/films">Films</NavLink>
      <NavLink exact to="/people">People</NavLink>
      <NavLink exact to="/locations">Locations</NavLink>
      <NavLink exact to="/species">Species</NavLink>
      <NavLink exact to="/vehicles">Vehicles</NavLink>
  </Router> */}
    </div>
  );
};

// == Export
export default Ghibli;
