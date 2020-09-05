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
  const { loading, data } = useQuery(GET_USER_REPOS, { variables: {} });

  const { user = {} } = data || {};
  const { repositories } = user || {};
  const { edges = [] } = repositories || {};

  return (
    <Box minHeight="80vh">
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
                minHeight="15vh"
                key={node.id}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius={5}
              >
                <TitleLink href={node.url} fontSize={28}>
                  {node.name}
                </TitleLink>
                <Text fontSize={[1]} color="darkGray" mt={2}>
                  {node.description}
                </Text>
                <Box display="flex" justifyContent="space-between" mt={4}>
                  <Box display="flex" justifyContent="flex-start">
                    {(node.languages?.edges || []).map(({ node }) => (
                      <Box key={node.id} mr={2}>
                        <Badge backgroundColor={node.color} label={node.name} />
                      </Box>
                    ))}
                  </Box>
                  <Box>
                    <Box display="flex" justifyContent="flex-end">
                      <Text ml={2}>
                        <span role="img">&#11088;</span> Stars:{" "}
                        {node.stargazers.totalCount}
                      </Text>
                      <Text ml={2}>
                        <span role="img">👀</span> Watchers:{" "}
                        {node.watchers.totalCount}
                      </Text>
                    </Box>
                  </Box>
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
