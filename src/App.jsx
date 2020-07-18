import React from 'react';
import { ThemeProvider } from 'styled-components';

import Box from './components/Box';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './views/Footer';
import Header from './views/Header';
import Intro from './views/Intro';
import Work from './views/Work';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<Box>
			<Header />
			<Intro />
			<About />
			<Work />
			<Contact />
			<Footer />
		</Box>
	</ThemeProvider>
);

export default App;
