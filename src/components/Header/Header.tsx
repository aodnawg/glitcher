import React from "react";

import { Flex, Heading, IconButton, Box } from "@chakra-ui/core";

const Header = () => {
  return (
    <Flex as="header" padding="1.5rem" bg="black" mb="2rem">
      <Heading
        as="h1"
        size="lg"
        fontWeight="800"
        color="white"
        fontFamily="Open Sans"
      >
        GLITCHER
      </Heading>
    </Flex>
  );
};

export default Header;
