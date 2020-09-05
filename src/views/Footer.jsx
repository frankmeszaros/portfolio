import React from "react";
import ReactTooltip from "react-tooltip";

import Box from "../components/Box";
import Link from "../components/Link";
import Text from "../components/Text";

import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";

const PROFILES = {
  linkedin: {
    icon: <LinkedIn />,
    uri: "https://linkedin.com/in/frankwmeszaros",
    tooltip: "LinkedIn",
  },
  github: {
    icon: <Github />,
    uri: "https://github.com/frankmeszaros",
    tooltip: "Github",
  },
};

const Footer = () => (
  <Box
    bg="white"
    bottom="0"
    boxShadow="4px 6px 8px 8px rgba(205, 205, 205, 0.75)"
    display="flex"
    fontSize={1}
    justifyContent="center"
    left="0"
    pt={2}
    position="fixed"
    height="5vh"
    width="100vw"
  >
    <Box display="flex" justifyContent="space-between" width="4vw">
      {Object.keys(PROFILES).map((profile) => (
        <Text data-tip={PROFILES[profile].tooltip} key={profile}>
          <Link href={PROFILES[profile].uri}>{PROFILES[profile].icon}</Link>
        </Text>
      ))}
    </Box>
    <ReactTooltip />
  </Box>
);

export default Footer;
