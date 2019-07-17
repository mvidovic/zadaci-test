import React from "react";
import "./PokemonInfoComponent.css";

const PokemonInfoComponent = props => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={props.pokemon.image} alt="" className="responsive" />
      </div>
      <div className="grid-item">
        <h2>{props.pokemon.name}</h2>
        <h4>Pokemon type</h4>
        <ul>
          {props.pokemon.types.map((value, id) => (
            <li key={id}>{value}</li>
          ))}
        </ul>

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
      <div className="grid-item">
        <h3>Special Attacks</h3>
        <ul>
          {props.pokemon.attacks.special.map((attack, id) => (
            <div key={id}>
              <li>Name: {attack.name}</li>
              <li>Type: {attack.type}</li>
              <li>Damage: {attack.damage}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfoComponent;
