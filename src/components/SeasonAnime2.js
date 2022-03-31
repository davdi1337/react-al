import React, { useState, useEffect } from "react";
import {
  Flex,
  useColorModeValue,
  Image,
  Tag,
  TagLabel,
  Text,
  TagLeftIcon,
  Link,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const SeasonAnime = () => {
  const [data, setData] = useState(null);
  const cardbg = useColorModeValue("white", "gray.900");
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://api.jikan.moe/v4/seasons/now");
      const anime = await res.json();
      setData(anime.data);
      console.log(anime.data);
    }, 800); // wait 800ms to load data
  }, []);

  return (
    <Flex flexWrap="wrap" alignItems="center" gap="5" flexDirection="column">
      <Link
        href="#"
        opacity="0.8"
        _hover={{ opacity: "1" }}
        textTransform="uppercase"
      >
        Popular seasonal
      </Link>
      <Flex flexDirection="row" gap="5" justifyContent="center" flexWrap="wrap">
        {data &&
          data
            .slice(0, 7)
            .map(({ mal_id, images, title, type, score, year, rank }) => (
              <Flex
                flexDirection="column"
                alignItems="center"
                w={{ base: "150px", sm: "200px" }}
                key={mal_id}
                bgColor={cardbg}
                justifyContent="space-between"
                borderRadius="xl"
                textAlign="center"
                gap="1"
                pb="2"
                boxShadow="xl"
                overflow="hidden"
                transition="transform 0.2s"
                minH="425px"
              >
                <Link
                  w="100%"
                  href={`/anime/${mal_id}`}
                  _focus={{ boxShadow: "none" }}
                >
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        w="100%"
                        h="260px"
                        objectFit="cover"
                        key={mal_id}
                        src={images.jpg.large_image_url}
                        alt={title}
                      ></Image>
                    </motion.div>
                  </AnimatePresence>
                </Link>
                <Text key={title} px="2">
                  {title}
                </Text>

                <Flex
                  gap="2"
                  key={rank}
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Tag
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    key={year}
                  >
                    <TagLeftIcon as={FaCalendarAlt}></TagLeftIcon>
                    <TagLabel>{year || "?"}</TagLabel>
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    key={score}
                  >
                    <TagLeftIcon as={FaStar}></TagLeftIcon>
                    <TagLabel>{score}</TagLabel>
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    key={type}
                    justifyContent="center"
                  >
                    <TagLabel>{type || "?"}</TagLabel>
                  </Tag>
                </Flex>
              </Flex>
            ))}
        {!data &&
          [1, 2, 3, 4, 5, 6, 7].map((n) => (
            <AnimatePresence>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w={{ base: "150px", sm: "200px" }}
                  bgColor={cardbg}
                  justifyContent="space-between"
                  borderRadius="xl"
                  textAlign="center"
                  gap="1"
                  pb="2"
                  boxShadow="xl"
                  overflow="hidden"
                  transition="transform 0.2s"
                  minH="425px"
                >
                  <Link w="100%" href="" _focus={{ boxShadow: "none" }}>
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Skeleton>
                          <Image
                            w="100%"
                            h="260px"
                            objectFit="cover"
                            src=""
                            alt=""
                          ></Image>
                        </Skeleton>
                      </motion.div>
                    </AnimatePresence>
                  </Link>
                  <SkeletonText w="90%">
                    <Text px="2">Title</Text>
                  </SkeletonText>

                  <Flex gap="2" flexDirection={{ base: "column", sm: "row" }}>
                    <Skeleton borderRadius="xl">
                      <Tag colorScheme="blue" size="sm" borderRadius="full">
                        <TagLeftIcon as={FaCalendarAlt}></TagLeftIcon>
                        <TagLabel>Year</TagLabel>
                      </Tag>
                    </Skeleton>
                    <Skeleton borderRadius="xl">
                      <Tag colorScheme="blue" size="sm" borderRadius="full">
                        <TagLeftIcon as={FaStar}></TagLeftIcon>
                        <TagLabel>Score</TagLabel>
                      </Tag>
                    </Skeleton>
                    <Skeleton borderRadius="xl">
                      <Tag
                        colorScheme="blue"
                        size="sm"
                        borderRadius="full"
                        justifyContent="center"
                      >
                        <TagLabel>Type</TagLabel>
                      </Tag>
                    </Skeleton>
                  </Flex>
                </Flex>
              </motion.div>
            </AnimatePresence>
          ))}
      </Flex>
    </Flex>
  );
};
export default SeasonAnime;
