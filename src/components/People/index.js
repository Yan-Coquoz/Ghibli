/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React, { useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

const People = ({ lien }) => {
  const [peopleData, setPeopleDatas] = useState([]);
  axios
    .get(`${lien}/people`)
    .then((response) => {
      setPeopleDatas(response.data);
    })
    .catch((error) => console.log(error));

  const liens = peopleData.map((link) => {
    return (
      <Card className="card__film" key={link.id} link color="blue">
        <Card.Content>
          <Card.Header>{link.name}</Card.Header>
          <Card.Meta>gender :{link.gender} </Card.Meta>
          <Card.Description>
            age :{link.age}, hair: {link.hair_color}, eye : {link.eye_color}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <Card.Group itemsPerRow="3" centered>
      {liens}
    </Card.Group>
  );
};

People.proptype = {
  lien: PropTypes.string.isRequired,
};
export default People;
