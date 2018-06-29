import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import GraphQL from "./graphql";

ReactDOM.render(
  <ApolloProvider client={GraphQL}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
