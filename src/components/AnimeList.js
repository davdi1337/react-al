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
import { useHistory } from "react-router-dom";

export const AnimeList = () => {
  const search = useContext(SearchContext);
  const tagbg = useColorModeValue("blue", "purple");
  const navigate = useHistory();

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
          borderWidth="1px"
          borderRadius="md"
          textAlign="center"
          rowGap="5"
          p="2"
        >
          <Image
            src={images.jpg.image_url}
            key={mal_id}
            alt={title}
            w="200px"
            h="300px"
            objectFit="cover"
            borderRadius="md"
          ></Image>
          <Text>{title}</Text>
          <Tag size="md" colorScheme={tagbg}>
            <TagLeftIcon as={FaStar}></TagLeftIcon>
            <TagLabel>{score || "?"}</TagLabel>
          </Tag>
          <Link
            onClick={() => onClickHandler(mal_id)}
            textDecoration="none!important"
          >
            <Button colorScheme={tagbg}>Learn more</Button>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};
