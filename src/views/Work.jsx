import React from "react";
import { ApolloProvider, useQuery } from "@apollo/client";

import Box from "../components/Box";
import Card from "../components/Card";
import Text from "../components/Text";

import client from "../graphql/client";
import { GET_USER_REPOS } from "../graphql/queries";

const PublicProjects = () => {
  const { loading, data, errors } = useQuery(GET_USER_REPOS, { variables: {} });

  const { user = {} } = data || {};
  const { id, name, login, repositories } = user || {};
  const { edges = [] } = repositories || {};

  if (edges) console.log(edges);
  if (errors) console.log(errors);

  return loading ? (
    "Loading"
  ) : (
    <Box id="work" p={[3, 4, 5]}>
      <Text fontSize={[4, 5, 6]} textAlign="left">
        Experience
      </Text>
      {edges.map(({ node }) => (
        <Box key={node.id} display="flex">
          <Box flex={1}>
            <a href={node.url} target="_blank" rel="noopener noreferrer">
              {node.name}
            </a>
          </Box>
          <Box flex={1}>
            <Text flex={1}>{node.isTemplate ? "Template" : "Project"}</Text>
          </Box>
          <Box flex={2} display="flex" justifyContent="space-between">
            <Text>{node.stargazers?.totalCount} stars</Text>
            <Text flex={1}>
              {node.description || "No description provided."}
            </Text>
          </Box>
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
