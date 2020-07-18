import React from 'react';

import Box from '../components/Box';
import Text from '../components/Text';

const Intro = () => (
	<Box display="flex" justifyContent="center" height="100vh" pl={[5, 6, 7]} pr={[5, 6, 7]}>
		<Box display="flex" flexDirection="column" justifyContent="center">
			<Text fontSize={[3, 4, 5]} color="darkGray">
				Hi, my name is
			</Text>
			<Text fontSize={[4, 5, 6]} fontWeight="bold">
				frank meszaros
			</Text>
			<Text fontSize={[3, 4, 5, 6]} color="darkGray">
				I like to build software that people enjoy using (usually for the web)
			</Text>
			<Text>
				I&apos;m a software engineer based out of Columbus, OH. Currently, I spend a lot of time building web
				applications and APIs, occasionally designing a UI component or two. I love creating
			</Text>
		</Box>
	</Box>
);

export default Intro;
