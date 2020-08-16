import React from "react";

import Box from "../components/Box";
import Text from "../components/Text";

const Intro = () => (
  <Box
    display="flex"
    justifyContent="center"
    height="100vh"
    pl={[5, 6, 7]}
    pr={[5, 6, 7]}
  >
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Text fontSize={[2, 3, 4]} color="darkGray">
        Hi, my name is
      </Text>
      <Text fontSize={[4, 5, 6]} fontWeight="bold">
        Frank Meszaros.
      </Text>
      <Text fontSize={[2, 3, 4]} color="darkGray">
        I like to build software that people enjoy using (usually for the web).
      </Text>
      <Text mt={4} pt={2} color="dimGray">
        I&apos;m a software engineer based out of Columbus, OH. Currently, I
        spend a lot of time building data-driven web applications, APIs, and
        occasionally some data engineering.
      </Text>
    </Box>
  </Box>
);

export default Intro;
