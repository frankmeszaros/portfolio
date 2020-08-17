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
  const { repositories } = user || {};
  const { edges = [] } = repositories || {};

  if (edges) console.log(edges);
  if (errors) console.log(errors);

  return (
    <Box height="100vh">
      {loading ? (
        "Loading"
      ) : (
        <Box id="work" p={[3, 4, 5]}>
          <Text fontSize={[4, 5, 6]} textAlign="left">
            Work
          </Text>
          <Box display="grid" gridTemplateColumns="auto auto auto">
            {edges.map(({ node }) => (
              <Card
                key={node.id}
                title={node.name}
                description={node.description}
                mt={2}
                mr={2}
                minHeight="20vh"
                maxHeight="20vh"
                minWidth="25vw"
                maxWidth="25vw"
              />
            ))}
          </Box>
          <Box></Box>
        </Box>
      )}
    </Box>
  );
};

const Work = () => (
  <ApolloProvider client={client}>
    <PublicProjects />
  </ApolloProvider>
);

export default Work;
