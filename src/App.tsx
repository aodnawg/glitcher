import React from "react";

import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";

import Canvas from "./Canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Header />
        <Content>
          <Canvas />
        </Content>
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
