import React from "react";

import Box from "../components/Box";
import Selector from "../components/Selector";
import Text from "../components/Text";

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Experience = () => (
  <Box height="100vh" id="Experience" pl={[4, 5, 6, 7]} pr={[4, 5, 6, 7]}>
    <Text fontSize={[4, 5, 6]} textAlign="center">
      Experience
    </Text>

    <Selector
      items={[
        {
          id: 1,
          name: "Finite State",
          description: "Securing da IoT.",
          titles: [
            {
              title: "Software Engineer",
              from: null,
              to: null,
            },
            {
              title: "Software Engineering Intern",
              from: null,
              to: null,
            },
          ],
        },
        // { id: 1, name: 'Finite State', description: DESCRIPTION, title: "Software Engineering Intern" },
        {
          id: 2,
          name: "Capital One",
          titles: [
            { title: "Software Engineering Intern", from: null, to: null },
          ],
          description: "Making credit cards great again",
        },
        {
          id: 3,
          name: "J.M Smucker Co.",
          titles: [
            { title: "Software Engineering Intern", from: null, to: null },
          ],
          description: "I made jelly great again.",
        },
      ]}
    />
  </Box>
);

export default Experience;
