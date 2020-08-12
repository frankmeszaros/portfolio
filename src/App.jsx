import React from "react";
import { ThemeProvider } from "styled-components";

import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Intro from "./views/Intro";
import Work from "./views/Work";

import theme from "./theme";

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
