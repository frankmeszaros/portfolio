import React from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import styled from "styled-components";

import Badge from "../components/Badge";
import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

import client from "../graphql/client";
import { GET_USER_REPOS } from "../graphql/queries";

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const PublicProjects = () => {
  const { loading, data, errors } = useQuery(GET_USER_REPOS, { variables: {} });

  const { user = {} } = data || {};
  const { repositories } = user || {};
  const { edges = [] } = repositories || {};

  if (edges) console.log(edges);
  if (errors) console.log(errors);

  return (
    <Box>
      {loading ? (
        "Loading"
      ) : (
        <Box id="work" p={[3, 4, 5]}>
          <Text fontSize={[4, 5, 6]} textAlign="left">
            Work
          </Text>
          <Box display="grid" gridTemplateColumns="1fr 1fr">
            {edges.map(({ node }) => (
              <Box
                boxShadow="2px 2px 4px rgba(205, 205, 205, 0.75)"
                m={2}
                p={4}
                minHeight="20vh"
                key={node.id}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius={5}
              >
                <TitleLink href={node.url} fontSize={28}>
                  {node.name}
                </TitleLink>
                <Text fontSize={[1]} color="darkGray">
                  {node.description}
                </Text>

                <Box display="flex" justifyContent="flex-start">
                  {(node.languages?.edges || []).map(({ node }) => (
                    <Box key={node.id} mr={2}>
                      <Text>{node.name}</Text>
                    </Box>
                  ))}
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Text ml={2}>
                    &#11088; Stars: {node.stargazers.totalCount}
                  </Text>
                  <Text ml={2}>👀 Watchers: {node.watchers.totalCount}</Text>
                </Box>
              </Box>
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
