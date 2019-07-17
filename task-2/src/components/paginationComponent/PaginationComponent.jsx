import React, { Component } from "react";
import "./PaginationComponent.css";
const PaginationComponent = props => {
  const { length } = props.length;
  const { pokemonPerPage } = props.pokemonPerPage;
  const pages = length / 5;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / pokemonPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }
  return pageNumbers.map(number => <li key={number}>{number}</li>);
};

export default PaginationComponent;
