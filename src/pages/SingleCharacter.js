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
  Skeleton,
  useBoolean,
  Box,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Characters() {
  const [data, setData] = useState([]);
  const loading = useBoolean(false);
  const cardbg = useColorModeValue("white", "gray.900");
  const [character, setCharacter] = useState([]);
  const accordbg = useColorModeValue("gray.100", "gray.800");
  const charactername = useColorModeValue("blue.500", "blue.200");
  const params = useParams();
  const search = useContext(SearchContext);
  const [, pageUpdate] = useState(false);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/characters/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/characters/${params.id}/anime`)
      .then((response) => response.json())
      .then((json) => {
        setCharacter(json.data);
        console.log(json.data);
      });
  }, []);
  return (
    <>
      <Flex justifyContent="center">
        <Flex w="960px" bgColor={cardbg} mt="100px" flexDirection="column">
          <Flex flexDirection="row" gap="3">
            <Image src={data.images?.jpg.image_url} w="100px" h="150px"></Image>
            <Flex flexDirection="column" justifyContent="center">
              <Text color={charactername}>{data.name}</Text>
              {character.slice(0, 1).map(({ role }) => {
                return <Text>{role}</Text>;
              })}
            </Flex>
          </Flex>
          <Text>About</Text>
          <Text>{data.about}</Text>
        </Flex>
      </Flex>
    </>
  );
}
export default Characters;
