import React from "react";

import { Flex, Heading, Divider, Link } from "@chakra-ui/core";

const Footer = () => {
  return (
    <>
      <Divider mt="2rem" />
      <Flex
        as="footer"
        padding="1.5rem"
        mb="2rem"
        direction="column"
        textAlign="center"
        color="gray"
      >
        <Heading as="h2" size="sm" fontFamily="Open Sans">
          <Link href="https://twitter.com/aodnawg">aodnawg</Link>
        </Heading>
        <Heading as="h3" size="sm" fontFamily="Open Sans">
          <Link href="https://github.com/aodnawg">github</Link>
        </Heading>
      </Flex>
    </>
  );
};

export default Footer;
