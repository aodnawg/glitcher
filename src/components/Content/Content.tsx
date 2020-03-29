import React from "react";

import { Box } from "@chakra-ui/core";

const Content: React.FC = ({ children }) => {
  return (
    <main>
      <Box h={"256px"}>{children}</Box>
    </main>
  );
};

export default Content;
