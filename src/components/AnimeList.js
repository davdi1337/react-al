import {
  Box,
  Flex,
  Image,
  Tag,
  TagLeftIcon,
  Text,
  TagLabel,
  Grid,
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
    <Grid
      gridTemplateColumns={{
        lg: "repeat(auto-fill, 185px)",
        sm: "repeat(auto-fill,minmax(150px,1fr))",
        base: "repeat(auto-fill,minmax(105px,1fr))",
      }}
      gridGap={{ lg: "25px 30px", md: "25px 25px", base: "25px 20px" }}
      justifyContent="space-between"
      px="5"
      mt="120px"
    >
      {search.animeData.map(({ title, images, mal_id }) => (
        <AnimatePresence>
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <Grid w="100%" gridRowGap="2" gridTemplateRows="min-content auto">
              <Link href={`/anime/${mal_id}`} _focus={{ boxShadow: "none" }}>
                <Image
                  src={images.jpg.large_image_url}
                  h="250px"
                  w="100%"
                  objectFit="cover"
                  borderRadius="xl"
                  boxShadow="xl"
                ></Image>
              </Link>
              <Text
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                fontSize="sm"
              >
                {title}
              </Text>
            </Grid>
          </motion.div>
        </AnimatePresence>
      ))}
    </Grid>
  );
};
