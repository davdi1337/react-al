import React, { useState, useEffect } from "react";
import {
  Flex,
  useColorModeValue,
  Image,
  Tag,
  TagLabel,
  Text,
  Spinner,
  TagLeftIcon,
  Link,
} from "@chakra-ui/react";
import { FaStar, FaHashtag } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function TopAnime() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardbg = useColorModeValue("white", "gray.900");
  const [style, setStyle] = useState({ display: "none" });

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
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      >
        <Flex flexWrap="wrap" justifyContent="center" mt="50px" gap="5">
          {data.map((anime) => (
            <AnimatePresence>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                key={anime.mal_id}
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w="250px"
                  key={anime.mal_id}
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
                  minH="425px"
                >
                  <Link
                    w="100%"
                    href={`/anime/${anime.mal_id}`}
                    _focus={{ boxShadow: "none" }}
                  >
                    <Image
                      w="100%"
                      h="300px"
                      objectFit="cover"
                      key={anime.mal_id}
                      src={anime.images.jpg.large_image_url}
                      alt={anime.title}
                    ></Image>
                  </Link>
                  <Text key={anime.title}>{anime.title}</Text>

                  <Flex gap="2" key={anime.rank}>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="full"
                      key={anime.rank}
                    >
                      <TagLeftIcon as={FaHashtag}></TagLeftIcon>
                      <TagLabel>{anime.rank}</TagLabel>
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="full"
                      key={anime.score}
                    >
                      <TagLeftIcon as={FaStar}></TagLeftIcon>
                      <TagLabel>{anime.score}</TagLabel>
                    </Tag>
                  </Flex>
                </Flex>
              </motion.div>
            </AnimatePresence>
          ))}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}
export default TopAnime;
