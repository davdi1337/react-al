import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Image,
  Tag,
  TagLabel,
  Text,
  Spinner,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FaStar, FaHashtag } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function TopAnime() {
  const [data, setData] = useState([]);
  const tagbg = useColorModeValue("blue", "purple");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setData(json.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return <Spinner size="xl" />;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Flex flexWrap="wrap" justifyContent="center" mt="50px" gap="5">
          {data.map((anime) => (
            <Flex
              flexDirection="column"
              alignItems="center"
              w="250px"
              key={anime.mal_id}
              borderWidth="1px"
              justifyContent="space-between"
              borderRadius="md"
              textAlign="center"
              p="2"
              gap="1"
            >
              <Image
                w="200px"
                h="300px"
                objectFit="cover"
                key={anime.mal_id}
                src={anime.images.jpg.image_url}
                borderRadius="md"
              ></Image>
              <Text key={anime.title}>{anime.title}</Text>

              <Flex gap="2">
                <Tag colorScheme={tagbg} size="md">
                  <TagLeftIcon as={FaHashtag}></TagLeftIcon>
                  <TagLabel>{anime.rank}</TagLabel>
                </Tag>
                <Tag colorScheme={tagbg} size="md">
                  <TagLeftIcon as={FaStar}></TagLeftIcon>
                  <TagLabel>{anime.score}</TagLabel>
                </Tag>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}
export default TopAnime;
