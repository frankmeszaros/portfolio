import React from "react";
import ReactGA from "react-ga";
import { ThemeProvider } from "styled-components";

import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Intro from "./views/Intro";
import Work from "./views/Work";

import theme from "./theme";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
if (window && window.location)
  ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Intro />
    <About />
    <Experience />
    <Work />
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
