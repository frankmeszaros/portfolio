import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GITHUB_URI = "https://api.github.com/graphql";

const httpLink = createHttpLink({ uri: GITHUB_URI });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = atob(process.env.REACT_APP_GITHUB_TOKEN);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
