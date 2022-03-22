import {
  Box,
  Flex,
  Image,
  Tag,
  TagLeftIcon,
  Text,
  TagLabel,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { SearchContext } from "../context/search";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const AnimeList = () => {
  const search = useContext(SearchContext);
  const cardbg = useColorModeValue("white", "gray.900");
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const onClickHandler = (mal_id) => {
    fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
      .then((response) => response.json())
      .then((json) => {
        search.singleData = json;
        setData(json.data);
        navigate(`/anime/${mal_id}`);
      });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="5"
          position="relative"
          mt="100px"
        >
          {search.animeData.map(({ images, mal_id, title, score }) => (
            <Box
              key={title}
              w="250px"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              borderRadius="xl"
              textAlign="center"
              boxShadow="xl"
              rowGap="5"
              pb="2"
              overflow="hidden"
              bgColor={cardbg}
            >
              <Image
                src={images.jpg.large_image_url}
                key={mal_id}
                alt={title}
                w="100%"
                h="300px"
                objectFit="cover"
              ></Image>
              <Text paddingInline="2">{title}</Text>
              <Tag size="md" colorScheme="blue" borderRadius="full">
                <TagLeftIcon as={FaStar}></TagLeftIcon>
                <TagLabel>{score || "?"}</TagLabel>
              </Tag>
              <Link
                onClick={() => onClickHandler(mal_id)}
                textDecoration="none!important"
              >
                <Button colorScheme="blue" borderRadius="xl">
                  Details
                </Button>
              </Link>
            </Box>
          ))}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};
