import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: global.token // todo: change to state that persists
      }
    });
  }
});

export default client;
