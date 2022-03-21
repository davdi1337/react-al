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
  Link,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FaStar, FaHashtag } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function TopManga() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardbg = useColorModeValue("white", "gray.900");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/manga")
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
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Flex flexWrap="wrap" justifyContent="center" mt="50px" gap="5">
          {data.map((manga) => (
            <Flex
              flexDirection="column"
              alignItems="center"
              w="250px"
              key={manga.mal_id}
              bgColor={cardbg}
              justifyContent="space-between"
              borderRadius="xl"
              textAlign="center"
              gap="1"
              pb="2"
              boxShadow="xl"
              overflow="hidden"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s"
            >
              <Image
                w="100%"
                h="300px"
                objectFit="cover"
                key={manga.mal_id}
                src={manga.images.jpg.large_image_url}
              ></Image>
              <Text key={manga.title}>{manga.title}</Text>

              <Flex gap="2">
                <Tag colorScheme="blue" size="md" borderRadius="full">
                  <TagLeftIcon as={FaHashtag}></TagLeftIcon>
                  <TagLabel>{manga.rank}</TagLabel>
                </Tag>
                <Tag colorScheme="blue" size="md" borderRadius="full">
                  <TagLeftIcon as={FaStar}></TagLeftIcon>
                  <TagLabel>{manga.scored}</TagLabel>
                </Tag>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}
export default TopManga;
