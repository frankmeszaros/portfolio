import React from "react";

import Box from "../components/Box";
import Text from "../components/Text";

const About = () => (
  <Box id="about" height="100vh" p={[3, 4, 5]}>
    <Text fontSize={[4, 5, 6]}>About</Text>
    <Text fontSize={[2, 3, 4]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </Box>
);

export default About;
