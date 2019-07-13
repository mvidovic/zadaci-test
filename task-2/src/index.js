import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
