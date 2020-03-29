import ReactDOM from "react-dom";
import React from "react";

import Canvas from "./Canvas";

const App = () => {
  return (
    <>
      <Canvas />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
