import React from "react";
import styled from "styled-components";

import Box from "../components/Box";
// import Button from "../components/Button";
import Link from "../components/Link";
import Text from "../components/Text";

const EMAIL = "frankwmeszaros@gmail.com";

const Button = styled(Link)`
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(205, 205, 205, 0.75);

  :hover {
    text-decoration: none;
    transition: 400ms;
    box-shadow: 1px 5px 5px rgba(190, 190, 190, 0.75);
  }
`;

const Contact = () => (
  <Box id="contact" p={[3, 4, 5]} minHeight="75vh" px={8}>
    <Text fontSize={[4, 5, 6]}>Let&apos;s get in touch</Text>
    <Text fontSize={[2, 3, 4]}>
      I&apos;m currently not exploring new opportunities, but I&apos;m always
      happy to get in touch via email. I&apos;ll try to get back to you as soon
      as I can!
    </Text>
    <Box display="flex" justifyContent="center">
      <Button
        color="white"
        backgroundColor="black"
        borderRadius={4}
        p={2}
        href={`mailto:${EMAIL}`}
        target="blank"
      >
        Get in touch
      </Button>
    </Box>
  </Box>
);

export default Contact;
