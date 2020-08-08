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

const Header = () => (
  <Box
    position="fixed"
    width="100vw"
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    backgroundColor="white"
    boxShadow="2px 4px 4px rgba(205, 205, 205, 0.75)"
    pt={[3, 3, 4, 4]}
    pb={[3, 3, 4, 4]}
    fontSize={[1]}
  >
    <Box onClick={scrollToTop} pl={3}>
      <Text letterSpacing={3} fontWeight="bold">
        FM
      </Text>
    </Box>
    <Box display="flex" pr={2}>
      <ScrollLink
        to="about"
        activeClass="active"
        spy
        smooth
        offset={OFFSET}
        duration={DURATION}
        mr={2}
      >
        <LinkText>About</LinkText>
      </ScrollLink>

      <ScrollLink
        to="work"
        activeClass="active"
        spy
        smooth
        offset={OFFSET}
        duration={DURATION}
        mr={2}
      >
        <LinkText>Work</LinkText>
      </ScrollLink>

      <ScrollLink
        to="contact"
        activeClass="active"
        spy
        smooth
        offset={OFFSET}
        duration={DURATION}
        mr={2}
      >
        <LinkText>Contact</LinkText>
      </ScrollLink>
    </Box>
  </Box>
);

export default Header;
