// import 'typename-monkey-patch';

import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import GraphQL from "./graphql/client";

import { Provider } from "mobx-react";
import stores from "./store";

import App from "./App";

ReactDOM.render(
  <ApolloProvider client={GraphQL}>
    <Provider {...stores}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
