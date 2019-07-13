import React, { Component } from "react";
import { link } from "fs";

const PokemonInfoComponent = props => {
  console.log(props.pokemon, "pokemon");
  return (
    <div>
      <div>
        <img src={props.pokemon.image} alt="" />
      </div>
      <div>
        <h3>{props.pokemon.name}</h3>
        <h4>Pokemon type</h4>
        {props.pokemon.types.map((value, id) => (
          <li key={id}>{value}</li>
        ))}

        <h4>Pokemon weight</h4>
        <ul>
          <li>Minimum: {props.pokemon.weight.minimum}</li>
          <li>Maximum: {props.pokemon.weight.maximum}</li>
        </ul>
        <h4>Pokemon height</h4>
        <ul>
          <li>Minimum: {props.pokemon.height.minimum}</li>
          <li>Maximum: {props.pokemon.height.maximum}</li>
        </ul>
      </div>
      <div>
        <h3>Special Attacks</h3>
        {props.pokemon.attacks.special.map((attack, id) => (
          <div key={id}>
            <li>Name: {attack.name}</li>
            <li>Type: {attack.type}</li>
            <li>Damage: {attack.damage}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonInfoComponent;
