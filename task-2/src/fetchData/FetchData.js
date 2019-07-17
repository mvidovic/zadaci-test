import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import "./FetchData.css";
import PokemonInfoComponent from "../components/pokemonInfoComponent/PokemonInfoComponent.jsx";
import PaginationComponent from "../components/paginationComponent/PaginationComponent.jsx";
import { getPokemonsQuery } from "./pokemons.query";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

const FetchData = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const pokemonPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    client
      .query({
        query: getPokemonsQuery
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
        .slice((currentPage - 1) * pokemonPerPage, pokemonPerPage * currentPage)
        .map(pokemon => (
          <PokemonInfoComponent key={pokemon.id} pokemon={pokemon} />
        ))}
      <PaginationComponent
        length={pokemons.length}
        pokemonPerPage={pokemonPerPage}
      />
    </div>
  );
};

export default FetchData;
