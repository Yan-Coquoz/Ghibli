/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React, { useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./style.scss";

const Film = ({ lien }) => {
  const [filmData, setFilmDatas] = useState([]);

  axios
    .get(`${lien}/films`)
    .then((response) => {
      setFilmDatas(response.data);
    })
    .catch((error) => console.log(error));

  const films = filmData.map((film) => {
    return (
      <Card className="card__film" key={film.id} link color="blue">
        <Card.Content>
          <Card.Header>{film.original_title_romanised}</Card.Header>
          <Card.Meta>Producer :{film.producer} </Card.Meta>
          <Card.Meta>Director :{film.director}</Card.Meta>
          <Card.Meta>Year : {film.release_date}</Card.Meta>
          <Card.Description>Description :{film.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <Card.Group itemsPerRow="3" centered>
      {films}
    </Card.Group>
  );
};

Film.proptype = {
  lien: PropTypes.string.isRequired,
};
export default Film;
