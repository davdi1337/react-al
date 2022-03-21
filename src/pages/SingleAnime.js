import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import {
  Image,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Embed from "react-embed";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";
import Helmet from "react-helmet";

export const SingleAnime = () => {
  const search = useContext(SearchContext);
  const cardbg = useColorModeValue("white", "gray.900");
  const accordbg = useColorModeValue("gray.100", "gray.800");
  const [, pageUpdate] = useState(false);
  const params = useParams();
  useEffect(async () => {
    if (Object.keys(search.singleData).length === 0) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      search.singleData = res.data;
      pageUpdate((p) => !p);
    }
  }, []);
  return (
    <Flex mt="100px" alignItems="center" flexDirection="column">
      {Object.keys(search.singleData).length !== 0 ? (
        <Flex flexDirection="column" gap="5" alignItems="center">
          {/* ADD WEBSITE TITLE */}
          <Helmet>
            <title>{search.singleData.data.title} - ReactMAL</title>
          </Helmet>
          {/* ADD WEBSITE TITLE */}
          <AnimatePresence>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Flex
                flexDirection="column"
                w={{ base: "300px", sm: "400px", md: "500px", lg: "100%" }}
                minW={{ base: "300px", sm: "400px", md: "500px", lg: "720px" }}
                maxW="720px"
                justifyContent="center"
                alignItems="center"
                gap="5"
                bgColor={cardbg}
                borderRadius="xl"
                boxShadow="xl"
                p={{ base: "0", sm: "5" }}
                overflow="hidden"
                textAlign="center"
              >
                <Image
                  w="300px"
                  h="400px"
                  objectFit="cover"
                  borderRadius={{ base: "none", sm: "lg" }}
                  src={search.singleData.data.images.jpg.large_image_url}
                  alt={search.singleData.data.title}
                />
                <Flex
                  flexDirection="column"
                  w="100%"
                  alignItems="center"
                  fontSize="large"
                >
                  <Flex flexDirection={{ base: "column", lg: "row" }} gap="2">
                    <Text fontWeight="bold">Title:</Text>
                    <Text>{search.singleData.data.title || "?"}</Text>
                  </Flex>
                  <Flex
                    flexDirection={{
                      base: "column",
                      lg: "row",
                    }}
                    gap="2"
                  >
                    <Text fontWeight="bold">English title:</Text>
                    <Text>
                      {search.singleData.data.title_english ? (
                        <Text>{search.singleData.data.title_english}</Text>
                      ) : (
                        "?"
                      )}
                    </Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Season:</Text>
                    <Text textTransform="capitalize">
                      {search.singleData.data.season || "?"}
                    </Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Year:</Text>
                    <Text>{search.singleData.data.year || "?"}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Aired:</Text>
                    <Text>{search.singleData.data.aired.string}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Status:</Text>
                    <Text>{search.singleData.data.status}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Broadcast:</Text>
                    <Text>
                      {search.singleData.data.broadcast.string || "?"}
                    </Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Duration:</Text>
                    <Text>{search.singleData.data.duration}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Episodes:</Text>
                    <Text>{search.singleData.data.episodes || "?"}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Studios:</Text>
                    <Text>
                      {search.singleData.data.studios.map(({ name }, index) => {
                        if (
                          index !==
                          search.singleData.data.studios.length - 1
                        ) {
                          return (
                            <Text key={name} display="inline-flex">
                              {name},&nbsp;
                            </Text>
                          );
                        } else {
                          return (
                            <Text key={name} display="inline-flex">
                              {name}
                            </Text>
                          );
                        }
                      })}
                    </Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Genres:</Text>
                    <Text>
                      {search.singleData.data.genres.map(({ name }, index) => {
                        if (
                          index !==
                          search.singleData.data.genres.length - 1
                        ) {
                          return (
                            <Text key={name} display="inline-flex">
                              {name},&nbsp;
                            </Text>
                          );
                        } else {
                          return (
                            <Text key={name} display="inline-flex">
                              {name}
                            </Text>
                          );
                        }
                      })}
                    </Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Rank:</Text>
                    <Text>{search.singleData.data.rank || "?"}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Score:</Text>
                    <Text>{search.singleData.data.score || "?"}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Source:</Text>
                    <Text>{search.singleData.data.source}</Text>
                  </Flex>
                  <Flex flexDirection={{ base: "column", sm: "row" }} gap="2">
                    <Text fontWeight="bold">Type:</Text>
                    <Text>{search.singleData.data.type}</Text>
                  </Flex>
                </Flex>
                <Accordion allowToggle w="100%" p={{ base: "2", sm: "0" }}>
                  <AccordionItem
                    borderRadius="xl"
                    border="none"
                    bgColor={accordbg}
                    overflow="hidden"
                  >
                    <AccordionButton _focus={{ boxShadow: "none" }}>
                      <Box flex="1" textAlign="left">
                        Synopsis
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Text>
                        {search.singleData.data.synopsis || "Not yet added"}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </motion.div>
          </AnimatePresence>
          {/* Anime card end */}

          <AnimatePresence>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                bgColor={cardbg}
                p="5"
                borderRadius="xl"
                boxShadow="xl"
                w={{ base: "300px", sm: "460px", md: "560px", lg: "960px" }}
              >
                <Heading my="5">Trailer</Heading>

                {/* <Embed url={search.singleData.data.trailer.url}></Embed> */}
                {/* DISPLAY TRAILER IF HAVE */}
                {search.singleData.data.trailer.url ? (
                  <Embed url={search.singleData.data.trailer.url} />
                ) : (
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Flex
                      bgColor="red.500"
                      color="inherit"
                      rounded="50px"
                      w="50px"
                      h="50px"
                      justifyContent="center"
                      alignItems="center"
                      boxShadow={
                        "0px 0px 25px -5px rgb(229 62 62 / 67%), 0 4px 5px -5px rgb(229 62 62 / 43%)"
                      }
                    >
                      <CloseIcon boxSize="20px" />
                    </Flex>
                    <Text my="2">Trailer not found</Text>
                  </Flex>
                )}
              </Flex>
            </motion.div>
          </AnimatePresence>
        </Flex>
      ) : null}
    </Flex>
  );
};
