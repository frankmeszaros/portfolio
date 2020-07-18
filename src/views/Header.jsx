import React from 'react';
// import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

import Box from '../components/Box';
import { ScrollLink } from '../components/Link';
import Text from '../components/Text';

const DURATION = 150;
const OFFSET = -125;

const scrollToTop = () =>
	animateScroll.scrollToTop({
		duration: 150,
	});

const Header = () => (
	<Box
		position="fixed"
		width="100vw"
		display="flex"
		flexDirection="row"
		justifyContent="space-between"
		backgroundColor="white"
		boxShadow="2px 4px 4px rgba(205, 205, 205, 0.75)"
		pt={4}
		pb={4}
	>
		<Box onClick={scrollToTop} pl={3}>
			<Text letterSpacing={3} fontWeight="bold">
				FM
			</Text>
		</Box>
		<Box display="flex" pr={2}>
			<ScrollLink to="about" activeClass="active" spy smooth offset={OFFSET} duration={DURATION} mr={2}>
				About
			</ScrollLink>

			<ScrollLink to="work" activeClass="active" spy smooth offset={OFFSET} duration={DURATION} mr={2}>
				Work
			</ScrollLink>

			<ScrollLink to="contact" activeClass="active" spy smooth offset={OFFSET} duration={DURATION} mr={2}>
				Contact
			</ScrollLink>
		</Box>
	</Box>
);

export default Header;
