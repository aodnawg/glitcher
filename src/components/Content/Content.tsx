import React from "react";

import { Box } from "@chakra-ui/core";

const Content: React.FC = ({ children }) => {
  return (
    <main>
      <Box>{children}</Box>
    </main>
  );
};

export default Content;
