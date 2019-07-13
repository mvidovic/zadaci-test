import React, { useState, useEffect, Component } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./FetchData.css";
import PokemonInfoComponent from "../components/pokemonInfoComponent/PokemonInfoComponent.jsx";
import PaginationComponent from "../components/paginationComponent/PaginationComponent.jsx";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

const FetchData = props => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            pokemons(first: 50) {
              id
              number
              name
              weight {
                minimum
                maximum
              }
              height {
                minimum
                maximum
              }
              types
              attacks {
                special {
                  name
                  type
                  damage
                }
              }
              image
              attacks {
                special {
                  name
                  type
                  damage
                }
              }
            }
          }
        `
      })
      .then(response => {
        setPokemons(response.data.pokemons);
        setLoading(false);
      });
  });

  return loading ? (
    <div className="loader" />
  ) : (
    <div>
      {pokemons
        .slice((currentPage - 1) * pageSize, pageSize * currentPage)
        .map(pokemon => (
          <PokemonInfoComponent key={pokemon.id} pokemon={pokemon} />
        ))}
      <PaginationComponent length={pokemons.length} />
    </div>
  );
};

export default FetchData;
