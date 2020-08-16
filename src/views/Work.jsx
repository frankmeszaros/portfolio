import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  useQuery,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Box from "../components/Box";
import Card from "../components/Card";
import Text from "../components/Text";

const GITHUB_URI = "https://api.github.com/graphql";

const httpLink = createHttpLink({ uri: GITHUB_URI });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_TOKEN;
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

const GET_USER_REPOS = gql`
  query {
    user(login: "frankmeszaros") {
      id
      name
      login
      email
      repositories(last: 10, privacy: PUBLIC, isFork: false) {
        edges {
          node {
            id
            name
            isPrivate
            createdAt
            updatedAt
            url
            stargazers(first: 1) {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const PublicProjects = () => {
  const { loading, data } = useQuery(GET_USER_REPOS);
  const { user = {} } = data || {};
  const { id, name, login, repositories } = user || {};
  const { edges = [] } = repositories || {};
  console.log(edges);
  return loading ? (
    "Loading"
  ) : (
    <Box id="work" p={[3, 4, 5]}>
      <Text fontSize={[4, 5, 6]} textAlign="left">
        Experience
      </Text>
      {edges.map(({ node }) => (
        <Box key={node.id}>
          <a href={node.url} target="_blank" rel="noreferrer">
            {node.name}
          </a>
        </Box>
      ))}
    </Box>
  );
};

const Work = () => (
  <ApolloProvider client={client}>
    <PublicProjects />
  </ApolloProvider>
);

export default Work;
