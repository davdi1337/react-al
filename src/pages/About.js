import {
  Flex,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function About() {
  const cardbg = useColorModeValue("white", "gray.900");
  const reactlogo =
    "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png";
  const chakralogo =
    "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true";
  const jikanapilogo = "https://jikan.moe/assets/images/logo/jikan.logo.png";
  return (
    <Flex mt="100px" justifyContent="center">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, bounce: 0.4 }}
        >
          <Flex flexDirection="column" gap="5" alignItems="center">
            <Heading>About this project</Heading>
            <Box
              bgColor={cardbg}
              p="5"
              borderRadius="xl"
              boxShadow="xl"
              display="flex"
              flexDirection="column"
              gap="2"
              alignItems="center"
              w="500px"
              textAlign="center"
            >
              <Text>The website made with ReactJS, ChakraUI and JikanAPI</Text>
              <Flex gap="5">
                <Link href="https://reactjs.org/" target="_blank">
                  <Image src={reactlogo} h="25px"></Image>
                </Link>
                <Link href="https://chakra-ui.com/" target="_blank">
                  <Image src={chakralogo} h="25px"></Image>
                </Link>
                <Link href="https://jikan.moe/" target="_blank">
                  <Image src={jikanapilogo} h="25px"></Image>
                </Link>
              </Flex>
              <Text fontSize="smaller">
                This project are still work in progress and i have many plans
                what i want to do with it.
              </Text>
              <Text fontSize="smaller">
                If you found any bugs, feel free to contact me.
              </Text>
            </Box>
          </Flex>
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
}

export default About;
