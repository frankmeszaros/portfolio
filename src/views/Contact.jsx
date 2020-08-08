import React from "react";

import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

const EMAIL = "frankwmeszaros@gmail.com";

const Contact = () => (
  <Box height="100vh" id="contact" p={[3, 4, 5]}>
    <Text fontSize={[4, 5, 6]}>Let&apos;s get in touch</Text>
    <Text fontSize={[2, 3, 4]}>
      I&apos;m currently not exploring new opportunities, but I&apos;m always
      happy to get in touch via email. I&apos;ll try to get back to you as soon
      as I can!
    </Text>

    <Box border="1" borderColor="green">
      <Link href={`mailto:${EMAIL}`} target="blank">
        Get in touch
      </Link>
    </Box>
  </Box>
);

export default Contact;
