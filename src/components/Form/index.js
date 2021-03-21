/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import React from "react";
import { Segment, Form, Input } from "semantic-ui-react";
import "./style.scss";

// ! voir plus tard ! pour les furtures recherche par routes

const Title = (inputValue, onSubmitForm, onChangeInput) => {
  const handleOnSubmit = () => {
    console.log("j'envoie le inputValue au parent");
    onSubmitForm(inputValue);
  };

  return (
    <Segment>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <Input
            type="text"
            placeholder="You search for..."
            icon="leaf"
            iconPosition="left"
            value={inputValue}
            onChange={(event) => onChangeInput(event.target.value)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default Title;
