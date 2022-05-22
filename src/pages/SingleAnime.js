import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import {
  Image,
  Flex,
  Text,
  Box,
  Heading,
  useColorModeValue,
  Link,
  Grid,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Skeleton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Embed from "react-embed";
import { motion, AnimatePresence } from "framer-motion";
import Helmet from "react-helmet";

export const SingleAnime = () => {
  const search = useContext(SearchContext);
  const cardbg = useColorModeValue("white", "gray.800");
  const stackbg = useColorModeValue("gray.100", "gray.900"); // #1b202c
  const linkcolor = useColorModeValue("blue.600", "blue.300");
  const [, pageUpdate] = useState(false);
  const params = useParams();
  const [characters, setCharacters] = useState([]);
  const [relations, setRelations] = useState([]);
  const [staff, setStaff] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [characterloading, setCharacterLoading] = useState(true);
  const [staffloading, setStaffLoading] = useState(true);
  const [statloading, setStatLoading] = useState(true);
  const [trailerloading, setTrailerLoading] = useState(true);
  const [relationskeletonstyle, setRelationSkeleton] = useState({
    display: "block",
  });
  const [characterskeletonstyle, setCharacterSkeleton] = useState({
    display: "block",
  });
  const [staffskeletonstyle, setStaffSkeleton] = useState({ display: "block" });
  const [statskeletonstyle, setStatSkeleton] = useState({ display: "block" });
  const [trailerskeletonstyle, setTrailerSkeleton] = useState({
    display: "block",
  });

  const totalcolor = useColorModeValue("pink.500", "pink.200");
  const onholdcolor = useColorModeValue("yellow.500", "yellow.200");
  const watchingcolor = useColorModeValue("blue.500", "blue.200");
  const completedcolor = useColorModeValue("purple.500", "purple.200");
  const droppedcolor = useColorModeValue("red.500", "red.200");
  const plantowatchcolor = useColorModeValue("green.500", "green.200");
  useEffect(async () => {
    if (Object.keys(search.singleData).length === 0) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      search.singleData = res.data;
      pageUpdate((p) => !p);
    }
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/relations`
      );
      const relationsdata = await res.json();
      setRelations(relationsdata.data);
      setLoading(false);
      setRelationSkeleton({ display: "none" });
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const characterdata = await res.json();
      setCharacters(characterdata.data);
      setCharacterLoading(false);
      setCharacterSkeleton({ display: "none" });
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/staff`
      );
      const staffdata = await res.json();
      setStaff(staffdata.data);
      setStaffLoading(false);
      setStaffSkeleton({ display: "none" });
    }, 5000);
  }, []);
  /* useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/statistics?`
      );
      const statsdata = await res.json();
      setStats(statsdata.data);
      setStatLoading(false);
      setStatSkeleton({ display: "none" });
    }, 3500);
  }, []); */
  return (
    <>
      <Helmet title={`${search.singleData.data?.title} - ReactAL`}></Helmet>
      {Object.keys(search.singleData).length !== 0 ? (
        <Flex
          mt="100px"
          justifyContent="center"
          gap="10"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", md: "center", lg: "inherit" }}
          overflow={{ base: "hidden" }}
        >
          <Flex flexDirection="column" gap="10" alignItems="center">
            <Box
              w="250px"
              bgColor={cardbg}
              p="3"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.50"
              boxShadow="2xl"
            >
              <Image
                src={search.singleData.data.images.jpg.large_image_url}
                w="100%"
                h="315"
                borderRadius="lg"
                objectFit="cover"
                boxShadow="lg"
              ></Image>
            </Box>

            {/* ANIME DETAILS */}
            <Box
              w="300px"
              bgColor={cardbg}
              border="1px solid"
              borderColor="whiteAlpha.50"
              p="3"
              borderRadius="xl"
              display="flex"
              flexDirection="column"
              gap="3"
              boxShadow="2xl"
            >
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Aired</Text>
                <Text m="0!important">
                  {search.singleData.data.aired.string}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Season</Text>
                <Text m="0!important" textTransform="capitalize">
                  {search.singleData.data.season || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Status</Text>
                <Text m="0!important">
                  {search.singleData.data.status || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Episodes</Text>
                <Text m="0!important">
                  {search.singleData.data.episodes || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Source</Text>
                <Text m="0!important">
                  {search.singleData.data.source || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Rank</Text>
                <Text m="0!important">
                  {search.singleData.data.rank || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Score</Text>
                <Text m="0!important">
                  {search.singleData.data.score || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Broadcast</Text>
                <Text m="0!important">
                  {search.singleData.data.broadcast.day || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
                flexWrap="wrap"
              >
                <Text fontWeight="700">Studios</Text>
                <Flex m="0!important">
                  {search.singleData.data.studios?.map(({ name }, index) => {
                    if (index !== search.singleData.data.studios.length - 1)
                      return <Text m="0!important">{name},&nbsp;</Text>;
                    else {
                      return <Text m="0!important">{name}</Text>;
                    }
                  })}
                </Flex>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
                flexWrap="wrap"
              >
                <Text fontWeight="700">Genres</Text>
                <Flex m="0!important" flexWrap="wrap">
                  {search.singleData.data.genres?.map(({ name }, index) => {
                    if (index !== search.singleData.data.genres.length - 1) {
                      return <Text m="0!important">{name},&nbsp;</Text>;
                    } else {
                      return <Text m="0!important">{name}</Text>;
                    }
                  })}
                </Flex>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
                flexWrap="wrap"
              >
                <Text fontWeight="700">Themes</Text>
                <Flex m="0!important" flexWrap="wrap">
                  {search.singleData.data.themes?.map(({ name }, index) => {
                    if (index !== search.singleData.data.themes.length - 1) {
                      return <Text m="0!important">{name},&nbsp;</Text>;
                    } else {
                      return <Text m="0!important">{name}</Text>;
                    }
                  })}
                </Flex>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Favorites</Text>
                <Text m="0!important">
                  {search.singleData.data.favorites || "Unknown"}
                </Text>
              </Stack>
              <Stack
                bgColor={stackbg}
                borderRadius="md"
                fontSize="sm"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="2"
              >
                <Text fontWeight="700">Members</Text>
                <Text m="0!important">
                  {search.singleData.data.members || "Unknown"}
                </Text>
              </Stack>
            </Box>
          </Flex>
          {/* ANIME DETAILS */}

          {/* ANIME STATS */}
          <Flex
            w={{ lg: "1300px", md: "780px", base: "400px" }}
            bgColor={cardbg}
            border="1px solid"
            borderColor="whiteAlpha.50"
            borderRadius="xl"
            flexDirection="column"
            alignItems={{ base: "center", lg: "inherit" }}
            p="5"
            boxShadow="2xl"
            mb="24"
          >
            <Heading fontSize="2xl">{search.singleData.data.title}</Heading>
            <Text color="gray.500">{search.singleData.data.synopsis}</Text>

            <Grid>
              <Tabs
                mt="50px"
                /* w="100%" */ align="center"
                variant="solid-rounded"
              >
                <TabList border="none">
                  <Tab _focus={{ boxShadow: "none" }} mx="5" borderRadius="lg">
                    Overview
                  </Tab>
                  <Tab _focus={{ boxShadow: "none" }} mx="5" borderRadius="lg">
                    Characters
                  </Tab>
                  <Tab _focus={{ boxShadow: "none" }} mx="5" borderRadius="lg">
                    Staff
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="overview-tab">
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.4,
                        }}
                      >
                        <Flex flexDirection="column" alignItems="start" mt="50">
                          <Text fontWeight="700" mb="3">
                            Relations
                          </Text>
                          <Skeleton
                            w="400px"
                            h="60px"
                            isLoaded={!loading}
                            style={relationskeletonstyle}
                          ></Skeleton>
                          {relations?.map(({ relation, entry }) => (
                            <Flex>
                              <Text color="gray.500">{relation}:&nbsp;</Text>
                              {/* {entry?.map(({ mal_id, name }) => (
                                <Link
                                  href={`/anime/${mal_id}`}
                                  textDecoration="none!important"
                                  _hover={{ color: `${linkcolor}` }}
                                >
                                  {name}
                                </Link>
                              ))} */}
                              {entry?.map(({ mal_id, name }, index) => {
                                if (index !== entry.length - 1) {
                                  return (
                                    <Link
                                      href={`/anime/${mal_id}`}
                                      textDecoration="none!important"
                                      _hover={{ color: `${linkcolor}` }}
                                    >
                                      {name},&nbsp;
                                    </Link>
                                  );
                                } else {
                                  return (
                                    <Link
                                      href={`/anime/${mal_id}`}
                                      textDecoration="none!important"
                                      _hover={{ color: `${linkcolor}` }}
                                    >
                                      {name}
                                    </Link>
                                  );
                                }
                              })}
                            </Flex>
                          ))}
                        </Flex>

                        <Flex mt="50" flexDirection="column" alignItems="start">
                          <Text fontWeight="700" mb="3">
                            Characters
                          </Text>
                          <Skeleton
                            w="100%"
                            h="300px"
                            isLoaded={!characterloading}
                            style={characterskeletonstyle}
                          ></Skeleton>
                          <Grid
                            gridColumnGap={{ md: "10", lg: "10" }}
                            gridRowGap="10"
                            gridTemplateColumns={{
                              base: "repeat(1, 1fr)",
                              md: "repeat(2, 1fr)",
                              lg: "repeat(2, 1fr)",
                              xl: "repeat(3, 1fr)",
                            }}
                          >
                            {characters
                              ?.slice(0, 6)
                              .map(({ character, role, voice_actors }) => (
                                <Grid
                                  gridTemplateAreas='"character voice_actor"'
                                  bgColor={stackbg}
                                  borderRadius="lg"
                                  overflow="hidden"
                                  gridColumnGap="2"
                                >
                                  <Grid gridArea="character">
                                    <Grid
                                      gridTemplateAreas='"image content"'
                                      gridTemplateColumns="60px auto"
                                      gridGap="2"
                                    >
                                      <Link
                                        href={`/character/${character.mal_id}`}
                                        _focus={{ boxShadow: "none" }}
                                      >
                                        <Image
                                          src={character.images.jpg.image_url}
                                          gridArea="image"
                                          w="100%"
                                          h="100%"
                                          objectFit="cover"
                                        ></Image>
                                      </Link>
                                      <Grid
                                        gridArea="content"
                                        justifyContent="start"
                                        alignContent="space-between"
                                        textAlign="left"
                                      >
                                        <Link
                                          href={`/character/${character.mal_id}`}
                                          textDecoration="none!important"
                                          _hover={{ color: `${linkcolor}` }}
                                          _focus={{ boxShadow: "none" }}
                                        >
                                          <Text>{character.name}</Text>
                                        </Link>
                                        <Text
                                          fontSize="smaller"
                                          color="gray.500"
                                        >
                                          {role}
                                        </Text>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  {/* CHARACTER END */}
                                  {voice_actors
                                    .filter((voice_actors) =>
                                      voice_actors.language
                                        .toUpperCase()
                                        .includes("japanese".toUpperCase())
                                    )
                                    .slice(0, 1)
                                    ?.map(({ person, language }) => {
                                      return (
                                        <Grid gridArea="voice_actor">
                                          <Grid
                                            gridTemplateAreas='"content image"'
                                            gridTemplateColumns="auto 60px"
                                            gridGap="2"
                                          >
                                            <Image
                                              src={person.images.jpg.image_url}
                                              gridArea="image"
                                              w="100%"
                                              h="100%"
                                              objectFit="cover"
                                            ></Image>
                                            <Grid
                                              gridArea="content"
                                              justifyContent="end"
                                              alignContent="space-between"
                                              textAlign="right"
                                            >
                                              <Text>{person.name}</Text>
                                              <Text
                                                fontSize="smaller"
                                                color="gray.500"
                                              >
                                                {language}
                                              </Text>
                                            </Grid>
                                          </Grid>
                                        </Grid>
                                      );
                                    })}
                                </Grid>
                              ))}
                          </Grid>
                        </Flex>
                        {/* CHARACTER DETAILS END */}

                        <Flex mt="50" flexDirection="column" alignItems="start">
                          <Text fontWeight="700" mb="3">
                            Staff
                          </Text>
                          <Skeleton
                            w="100%"
                            h="100px"
                            isLoaded={!staffloading}
                            style={staffskeletonstyle}
                          ></Skeleton>

                          <Grid
                            gridTemplateColumns={{
                              base: "repeat(2, 1fr)",
                              md: "repeat(2, 1fr)",
                              lg: "repeat(3, 1fr)",
                              xl: "repeat(4, 1fr)",
                            }}
                            gridColumnGap={{ base: "5", md: "10" }}
                            gridRowGap="10"
                          >
                            {staff
                              ?.slice(0, 5)
                              ?.map(({ positions, person }, index) => {
                                return (
                                  <Grid
                                    gridTemplateAreas='"image content"'
                                    gridTemplateColumns="50px auto"
                                    bgColor={stackbg}
                                    borderRadius="lg"
                                    overflow="hidden"
                                    gridGap="2"
                                  >
                                    <Image
                                      src={person.images.jpg.image_url}
                                      w="100%"
                                      h="70px"
                                      gridArea="image"
                                      objectFit="cover"
                                    ></Image>
                                    <Grid
                                      gridArea="content"
                                      alignContent="space-between"
                                      justifyContent="start"
                                      textAlign="left"
                                    >
                                      <Text>{person.name}</Text>
                                      <Text
                                        fontSize="sm"
                                        color="gray.500"
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                        w="100%"
                                      >
                                        {positions + (index ? "" : "")}
                                      </Text>
                                    </Grid>
                                  </Grid>
                                );
                              })}
                          </Grid>
                        </Flex>
                        {/* STAFF END */}
                        <Flex mt="50" flexDirection="column" alignItems="start">
                          <Text fontWeight="700" mb="3">
                            Trailer
                          </Text>
                          <Box
                            w={{ base: "100%", lg: "50%" }}
                            borderRadius="lg"
                            overflow="hidden"
                          >
                            <Embed
                              url={search.singleData.data.trailer.url}
                            ></Embed>
                          </Box>
                        </Flex>
                      </motion.div>
                    </AnimatePresence>
                    {/* TRAILED END */}
                  </TabPanel>
                  <TabPanel className="characters-tab">
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.4,
                        }}
                      >
                        <Grid
                          gridColumnGap="10"
                          gridRowGap="10"
                          gridTemplateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                          }}
                        >
                          {characters?.map(
                            ({ character, role, voice_actors }) => (
                              <Grid
                                gridTemplateAreas='"character voice_actor"'
                                bgColor={stackbg}
                                borderRadius="lg"
                                overflow="hidden"
                                gridColumnGap="2"
                              >
                                <Grid gridArea="character">
                                  <Grid
                                    gridTemplateAreas='"image content"'
                                    gridTemplateColumns="60px auto"
                                    gridGap="2"
                                  >
                                    <Link
                                      href={`/character/${character.mal_id}`}
                                      _focus={{ boxShadow: "none" }}
                                    >
                                      <Image
                                        src={character.images.jpg.image_url}
                                        gridArea="image"
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                      ></Image>
                                    </Link>
                                    <Stack
                                      gridArea="content"
                                      flexDirection="column"
                                      justifyContent="space-between"
                                      alignItems="start"
                                      textAlign="left"
                                    >
                                      <Link
                                        href={`/character/${character.mal_id}`}
                                        textDecoration="none!important"
                                        _hover={{ color: `${linkcolor}` }}
                                        _focus={{ boxShadow: "none" }}
                                      >
                                        <Text>{character.name}</Text>
                                      </Link>
                                      <Text fontSize="smaller" color="gray.500">
                                        {role}
                                      </Text>
                                    </Stack>
                                  </Grid>
                                </Grid>
                                {/* CHARACTER END */}
                                {voice_actors
                                  .filter((voice_actors) =>
                                    voice_actors.language
                                      .toUpperCase()
                                      .includes("japanese".toUpperCase())
                                  )
                                  ?.map(({ person, language }) => {
                                    return (
                                      <Grid gridArea="voice_actor">
                                        <Grid
                                          gridTemplateAreas='"content image"'
                                          gridTemplateColumns="auto 60px"
                                          gridGap="2"
                                        >
                                          <Image
                                            src={person.images.jpg.image_url}
                                            gridArea="image"
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                          ></Image>
                                          <Stack
                                            gridArea="content"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            alignItems="end"
                                            textAlign="end"
                                          >
                                            <Text>{person.name}</Text>
                                            <Text
                                              fontSize="smaller"
                                              color="gray.500"
                                            >
                                              {language}
                                            </Text>
                                          </Stack>
                                        </Grid>
                                      </Grid>
                                    );
                                  })}
                              </Grid>
                            )
                          )}
                        </Grid>
                      </motion.div>
                    </AnimatePresence>
                  </TabPanel>
                  <TabPanel className="staff-tab">
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.4,
                        }}
                      >
                        <Grid
                          gridTemplateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                          }}
                          gridColumnGap="10"
                          gridRowGap="10"
                        >
                          {staff?.map(({ person, positions }, index) => {
                            return (
                              <Grid
                                gridTemplateAreas='"image content"'
                                gridTemplateColumns="60px auto"
                                bgColor={stackbg}
                                borderRadius="lg"
                                overflow="hidden"
                                gridGap="2"
                              >
                                <Image
                                  src={person.images.jpg.image_url}
                                  w="100%"
                                  h="70px"
                                  gridArea="image"
                                  objectFit="cover"
                                ></Image>
                                <Grid
                                  gridArea="content"
                                  alignContent="space-between"
                                  justifyContent="start"
                                  textAlign="left"
                                >
                                  <Text>{person.name}</Text>
                                  <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    whiteSpace="nowrap"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    w="100%"
                                  >
                                    {positions + (index ? "" : "")}
                                  </Text>
                                </Grid>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </motion.div>
                    </AnimatePresence>
                    {/* STAFF END */}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Grid>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
};
