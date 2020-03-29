import React from "react";

import { Box, Text } from "@chakra-ui/core";

const Header = () => {
  return (
    <header>
      <Box w="100%" textAlign="center">
        <Text fontSize="4xl" fontWeight="800" fontFamily="Open Sans">
          GLITCHER
        </Text>
      </Box>
    </header>
  );
};

export default Header;
