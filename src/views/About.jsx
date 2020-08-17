import React from "react";

import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

const About = () => (
  <Box id="about" height="100vh" p={[3, 4, 5]}>
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
    <ul>
      <li>Node.JS</li>
      <ul>
        <li>React</li>
        <li>Express.JS</li>
        <li>Apollo GraphQL</li>
      </ul>

      <li>Python</li>
      <ul>
        <li>Django</li>
        <li>Graphene (Python GraphQL framework)</li>
        <li>PySpark</li>
      </ul>

      <li>Dockerizing things</li>
    </ul>
  </Box>
);

export default About;
