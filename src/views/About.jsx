import React from "react";

import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

import Aws from "../icons/aws";
import Django from "../icons/django";
import Express from "../icons/express";
import Github from "../icons/github";
import Python from "../icons/python";

const ICON_SIZE = "5em";

const About = () => (
  <Box id="about" p={[3, 4, 5]} minHeight="75vh">
    <Text fontSize={[4, 5, 6]}>About</Text>
    <Text fontSize={[2, 3, 4]}>
      Hey, I&apos;m Frank! I am a software (currently) based out of Ohio. I love
      working with new technologies and frameworks to create performant
      data-driven applications that provide a rich user experience.
    </Text>

    <Text>
      During my last year at The Ohio State University, I joined{" "}
      <Link href="https://finitestate.io">Finite State</Link> where I get to
      work on all sorts of interesting problems centered on user interfaces and
      data engineering.
    </Text>

    <Text>Recently, I&apos;ve been working with:</Text>
    <Box display="flex" justifyContent="space-between">
      <Aws fontSize={ICON_SIZE} />
      <Django fontSize={ICON_SIZE} />
      <Express fontSize={ICON_SIZE} />
      <Github fontSize={ICON_SIZE} />
      <Python fontSize={ICON_SIZE} />
    </Box>
  </Box>
);

export default About;
