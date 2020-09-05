import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
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
            description
            isPrivate
            isTemplate
            createdAt
            updatedAt
            url
            homepageUrl
            owner {
              id
              login
            }
            primaryLanguage {
              color
              id
              name
            }
            languages(first: 3) {
              totalCount
              totalSize

              edges {
                size
                node {
                  id
                  name
                  color
                }
              }
            }
            stargazers(first: 1) {
              totalCount
            }
            watchers(first: 0) {
              totalCount
            }
          }
        }
      }
    }
  }
`;
