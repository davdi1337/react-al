import React from "react";
import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Box align="center" opacity="0.5" fontSize="sm" my="5">
      &copy; {new Date().getFullYear()}{" "}
      <Link
        href="https://www.github.com/davdi1337"
        target="_blank"
        display="inline-flex"
        alignItems="center"
      >
        davdi1337
        <FaGithub />
      </Link>
      <Text color={useColorModeValue("blue.500", "purple.200")}>WIP</Text>
    </Box>
  );
}

export default Footer;
