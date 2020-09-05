import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";

import Box from "../components/Box";
import { ScrollLink } from "../components/Link";
import Text from "../components/Text";

const DURATION = 150;
const OFFSET = -125;

const LinkText = styled(Text)``;

const scrollToTop = () => animateScroll.scrollToTop({ duration: 150 });

const Header = () => {
  const scrollProps = {
    activeClass: "active",

    spy: true,
    smooth: true,
    offset: OFFSET,
    duration: DURATION,
    mr: 2,
  };

  return (
    <Box
      position="fixed"
      width="100vw"
      top="0px"
      pt={2}
      pb={2}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="black"
      color="white"
      boxShadow="2px 4px 4px rgba(205, 205, 205, 0.75)"
      fontSize={[1]}
    >
      <Box onClick={scrollToTop} pl={3}>
        <Text letterSpacing={3} fontWeight="bold">
          FM
        </Text>
      </Box>
      <Box display="flex" pr={2}>
        <ScrollLink to="about" {...scrollProps}>
          <LinkText>About</LinkText>
        </ScrollLink>

        <ScrollLink to="experience" {...scrollProps}>
          <LinkText>Experience</LinkText>
        </ScrollLink>

        <ScrollLink to="work" {...scrollProps}>
          <LinkText>Work</LinkText>
        </ScrollLink>

        <ScrollLink to="contact" {...scrollProps}>
          <LinkText>Contact</LinkText>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Header;
