import React from "react";

import Box from "../components/Box";
import Selector from "../components/Selector.tsx";
import Text from "../components/Text";

const Experience = () => (
  <Box height="100vh" id="experience" pl={[4, 5, 6, 7]} pr={[4, 5, 6, 7]}>
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
