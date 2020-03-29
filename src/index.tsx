import ReactDOM from "react-dom";
import React from "react";

import Canvas from "./Canvas";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Canvas />
      </Content>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
