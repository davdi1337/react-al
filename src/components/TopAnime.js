import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  useColorModeValue,
  Image,
  Text,
  Link,
  Skeleton,
  Box,
  Grid,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const TopAnime = () => {
  const [data, setData] = useState(null);
  const cardbg = useColorModeValue("white", "gray.900");
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://api.jikan.moe/v4/top/anime");
      const anime = await res.json();
      setData(anime.data);
      /* console.log(anime.data); */
    }, 800); // wait 800ms to load data
  }, []);

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <Box maxW="1300px" w="100%" px="5" mt="100">
      <Flex justifyContent="space-between" alignItems="center" w="100%" mb="5">
        <Text textTransform="uppercase" fontWeight="700">
          Top anime
        </Text>
        <Link textDecoration="none!important" href="#">
          <Text fontSize="sm">View all</Text>
        </Link>
      </Flex>

      <Grid
        gridRowGap={{ base: "5", md: "10" }}
        gridColumnGap="5"
        gridTemplateColumns={{
          lg: "repeat(auto-fill, 185px)",
          sm: "repeat(auto-fill,minmax(155px,1fr))",
          base: "repeat(auto-fill,minmax(105px,1fr))",
        }}
        justifyContent="space-between"
      >
        {data &&
          data.slice(0, 12).map(({ mal_id, images, title }) => (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Grid
                  w="100%"
                  gridTemplateRows="min-content auto"
                  gridRowGap="2"
                >
                  <Link
                    href={`/anime/${mal_id}`}
                    _focus={{ boxShadow: "none" }}
                  >
                    <Image
                      src={images.jpg.large_image_url}
                      borderRadius="xl"
                      boxShadow="xl"
                      h="250px"
                      w="100%"
                      objectFit="cover"
                    ></Image>
                  </Link>
                  <Text
                    fontSize="sm"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    fontWeight="500"
                  >
                    {title}
                  </Text>
                </Grid>
              </motion.div>
            </AnimatePresence>
          ))}

        {!data &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <AnimatePresence>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              >
                <Grid w="180px" gridTemplateRow="min-content auto">
                  <Skeleton w="100%" h="270px" borderRadius="xl"></Skeleton>
                </Grid>
              </motion.div>
            </AnimatePresence>
          ))}
      </Grid>
    </Box>
  );
};
export default TopAnime;
