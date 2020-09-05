import React from "react";

import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

import Me from "../me.jpg";

import Aws from "../icons/aws";
import Django from "../icons/django";
import Express from "../icons/express";
import Github from "../icons/github";
import Node from "../icons/node";
import Python from "../icons/python";

const ICON_SIZE = "5em";

const About = () => (
  <Box id="about" p={[1, 2, 3]} minHeight="100vh">
    <Box px={[2, 3]}>
      <Text fontSize={[4, 5, 6]}>About</Text>
      <Box display="flex" justifyContent="center">
        <Box width="20vw">
          <img src={Me} width="100%" alt="frank" />
        </Box>
      </Box>

      <Text fontSize={[1, 2, 3]} p={[1, 2]}>
        Hey, I&apos;m Frank! I am a software (currently) based out of Ohio. I
        love working with new technologies and frameworks to create performant
        data-driven applications that provide a rich user experience.
      </Text>

      <Text mt={2} fontSize={[1, 2, 3]} p={[1, 2]}>
        During my last year at The Ohio State University, I joined{" "}
        <Link href="https://finitestate.io">Finite State</Link> as an intern,
        and I&apos;ve been there since! I love that I get to work on all sorts
        of interesting problems.
      </Text>

      <Box my={4}>
        <Text fontSize={[1, 2, 3]} p={[1, 2]}>
          Recently, I&apos;ve been working with:
        </Text>
      </Box>
    </Box>

    <Box display="flex" justifyContent="center">
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
      >
        <Aws fontSize={ICON_SIZE} mx={[1, 2, 3]} />
        <Django fontSize={ICON_SIZE} mx={[1, 2, 3]} />
        <Express fontSize={ICON_SIZE} mx={[1, 2, 3]} />
        <Github fontSize={ICON_SIZE} mx={[1, 2, 3]} />
        <Node fontSize={ICON_SIZE} mx={[1, 2, 3]} />
        <Python fontSize={ICON_SIZE} mx={[1, 2, 3]} />
      </Box>
    </Box>
  </Box>
);

export default About;
