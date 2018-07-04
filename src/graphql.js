import ApolloClient from "apollo-boost";
import { API_URL } from "./global/constants";

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: global.token, // todo: change to state that persists
        //authorization: "dev"
      },
    });
  },
});

export default client;
