import React from "react";
import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

function Welcome() {
  const headingcolor = useColorModeValue("blue.500", "blue.200");
  const gradientbg = useColorModeValue("white", "gray.800");
  const imageurl =
    "https://animecorner.me/wp-content/uploads/2021/11/attack-on-titan-final-season-visual.png";
  return (
    <Flex justifyContent="left" mt="60px" w="100%" h="70vh">
      <Flex
        flexDirection="column"
        w="50%"
        h="65vh"
        zIndex="docked"
        justifyContent="center"
        ml="10"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, bounce: 0.4 }}
          >
            <Heading>
              Welcome to{" "}
              <Heading color={headingcolor} display="inline">
                our
              </Heading>{" "}
              site!
            </Heading>
            <Text mb="5">
              I decided to make a modern animelist website, where you can search
              for any anime you want, see their informations, and many more
              things in the near future!
            </Text>
            <Link href="#" textDecoration="none!important">
              <Button colorScheme="blue" borderRadius="xl">
                About this project
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </Flex>
      <Box
        position="absolute"
        w="inherit"
        h="65vh"
        bgImage={[`url(${imageurl})`]}
        bgPosition="50%"
        bgSize="cover"
      >
        <Box
          /* bgGradient="linear(to-r, gray.800 30%, transparent 70%)" */
          bgGradient={[`linear(to-r, ${gradientbg} 30%, transparent 70%)`]}
          w="inherit"
          h="inherit"
        >
          <Box
            bgGradient={[`linear(to-t, ${gradientbg} 10%, transparent 90%)`]}
            w="inherit"
            h="70vh"
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default Welcome;
