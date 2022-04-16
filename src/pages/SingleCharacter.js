import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import {
  Flex,
  useColorModeValue,
  Image,
  Text,
  Heading,
  Button,
  Link,
  Grid,
  Skeleton,
  useBoolean,
  Box,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Helmet from "react-helmet";

function Characters() {
  const [data, setData] = useState([]);
  const loading = useBoolean(false);
  const cardbg = useColorModeValue("white", "gray.900");
  const stackbg = useColorModeValue("gray.100", "#1b202c"); // #171c26
  const [character, setCharacter] = useState([]);
  const accordbg = useColorModeValue("gray.100", "gray.800");
  const charactername = useColorModeValue("blue.500", "blue.200");
  const params = useParams();
  const search = useContext(SearchContext);
  const [, pageUpdate] = useState(false);

  useEffect(async () => {
    fetch(`https://api.jikan.moe/v4/characters/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  useEffect(async () => {
    fetch(`https://api.jikan.moe/v4/characters/${params.id}/anime`)
      .then((response) => response.json())
      .then((json) => {
        setCharacter(json.data);
      });
  }, []);
  return (
    <>
      <Helmet title={`${data.name} - ReactAL`}></Helmet>
      <Flex
        mt="100px"
        justifyContent="center"
        gap="10"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", md: "center", lg: "inherit" }}
        overflow={{ base: "hidden" }}
      >
        <Flex flexDirection="column" gap="10">
          <Box
            w="250px"
            bgColor={cardbg}
            p="3"
            borderRadius="lg"
            boxShadow="2xl"
          >
            <Image
              src={data.images?.jpg.image_url}
              w="100%"
              borderRadius="md"
              objectFit="cover"
              boxShadow="lg"
            ></Image>
          </Box>
        </Flex>

        <Flex
          w={{ lg: "1300px", md: "780px", base: "400px" }}
          bgColor={cardbg}
          borderRadius="lg"
          flexDirection="column"
          alignItems={{ base: "center", lg: "inherit" }}
          p="5"
          boxShadow="2xl"
          mb="24"
        >
          <Flex alignItems="center" gap="2">
            <Heading fontSize="2xl">{data.name}</Heading>
            <Text fontSize="sm" color="gray.500">
              ({data.name_kanji})
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.500">
            {data.about}
          </Text>

          <Flex mt="5">
            <Text fontWeight="700">Favorites:&nbsp;</Text>
            <Text>{data.favorites}</Text>
          </Flex>

          <Flex mt="5" flexDirection="column">
            {/* <Text mb="3">Anime</Text> */}
            <Grid
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gridColumnGap="10"
              gridRowGap="10"
            >
              {character.map(({ anime }) => (
                <Grid
                  gridTemplateColumns="60px auto"
                  bgColor={stackbg}
                  borderRadius="sm"
                  overflow="hidden"
                  gridGap="2"
                  alignItems="center"
                >
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    _focus={{ boxShadow: "none" }}
                    h="100%"
                  >
                    <Image
                      src={anime.images.jpg.large_image_url}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      borderRadius="sm"
                    ></Image>
                  </Link>
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    _focus={{ boxShadow: "none" }}
                    textDecoration="none!important"
                  >
                    <Text>{anime.title}</Text>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default Characters;
