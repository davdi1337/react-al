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
  const tagbg = useColorModeValue("blue", "purple");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/manga")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
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
              borderWidth="1px"
              justifyContent="space-between"
              borderRadius="md"
              textAlign="center"
              p="2"
              gap="1"
            >
              <Link href={manga.url} target="_blank">
                <Image
                  w="200px"
                  h="300px"
                  objectFit="cover"
                  key={manga.mal_id}
                  src={manga.images.jpg.image_url}
                  borderRadius="md"
                ></Image>
              </Link>
              <Text key={manga.title}>{manga.title}</Text>
              <Flex gap="2">
                <Tag colorScheme={tagbg} size="md">
                  <TagLeftIcon as={FaHashtag}></TagLeftIcon>
                  <TagLabel>{manga.rank}</TagLabel>
                </Tag>
                <Tag colorScheme={tagbg} size="md">
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
