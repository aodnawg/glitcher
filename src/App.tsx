import React from "react";

import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";

import Canvas from "./Canvas";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Header />
        <Content>
          <Canvas />
        </Content>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
