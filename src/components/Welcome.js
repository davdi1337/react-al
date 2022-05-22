import React, { useEffect } from "react";
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
  const gradientbg = useColorModeValue("gray.50", "gray.900");
  const imageurl =
    "https://animecorner.me/wp-content/uploads/2021/11/attack-on-titan-final-season-visual.png";
  const image1 =
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131681-vqkjDYQQpAQ9.jpg";
  const image2 =
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140960-Z7xSvkRxHKfj.jpg";
  const image3 =
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/125367-hGPJLSNfprO3.jpg";
  const image4 =
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/137281-kWj2z1Nk8akA.jpg";
  function randomImage() {
    var images = [image1, image2, image3];
    var random = Math.floor(images.length * Math.random());
    var image_class = document.querySelector(".teszt");
    image_class.style.backgroundImage = `url('${images[random]}')`;
  }
  useEffect(() => {
    randomImage();
  });
  return (
    <Flex justifyContent="left" mt="0px" w="100%" h="90vh">
      <Flex
        flexDirection="column"
        w="50%"
        h="80vh"
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
            <Link href="/about" textDecoration="none!important">
              <Button colorScheme="blue" borderRadius="xl">
                About this project
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </Flex>
      <Box
        className="teszt"
        position="absolute"
        w="inherit"
        h="80vh"
        bgImage={[`url(${imageurl})`]}
        bgPosition="50%"
        bgSize="cover"
      >
        <Box
          bgGradient={[`linear(to-r, ${gradientbg} 10%, transparent 70%)`]}
          w="inherit"
          h="inherit"
        >
          <Box
            bgGradient={[`linear(to-t, ${gradientbg} 10%, transparent 90%)`]}
            w="inherit"
            h="80vh"
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default Welcome;
