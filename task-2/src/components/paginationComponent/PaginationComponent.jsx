import React, { Component } from "react";
import "./PaginationComponent.css";
const PaginationComponent = props => {
  const { length } = props;
  const pages = length / 5;
  return (
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  );
};

export default PaginationComponent;
