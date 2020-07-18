import React from 'react';

import Box from '../components/Box';
import Text from '../components/Text';

const Contact = () => (
	<Box height="100vh" id="contact" p={[3, 4, 5]}>
		<Text fontSize={[4, 5, 6]}>Let&apos;s get in touch</Text>
		<Text fontSize={[2, 3, 4]}>
			I&apos;m not currently exploring new opportunities, but I&apos;m always happy to chat via email. I&apos;ll
			try to get back to you as soon as I can! 🚀
		</Text>
	</Box>
);

export default Contact;
