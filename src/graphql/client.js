import ApolloClient from "apollo-boost";
import { API_URL } from "./../global/constants";
import AuthStore from "./../store/authentication";

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  request: operation => {
    console.log("token=", AuthStore.token);
    operation.setContext({
      headers: {
        authorization: AuthStore.token, // todo: change to state that persists
      },
    });
  },
});

export default client;
