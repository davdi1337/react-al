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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Characters() {
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const cardbg = useColorModeValue("white", "gray.900");
  const accordbg = useColorModeValue("gray.100", "gray.800");
  const charactername = useColorModeValue("blue.500", "blue.200");
  const params = useParams();
  const search = useContext(SearchContext);
  const [, pageUpdate] = useState(false);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${params.id}/characters`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  return (
    <>
      <Flex justifyContent="center">
        <AnimatePresence>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <Flex
              w={{ base: "300px", sm: "400px", md: "720px", lg: "960px" }}
              bgColor={cardbg}
              alignItems="center"
              flexDirection="column"
              gap="2"
              borderRadius="xl"
              p="5"
              boxShadow="xl"
              mt="100px"
            >
              <Heading>All Characters</Heading>
              <Link
                href={`/anime/${params.id}`}
                textDecoration="none!important"
              >
                <Button
                  colorScheme="blue"
                  borderRadius="xl"
                  leftIcon={<ArrowBackIcon />}
                  my="2"
                >
                  Back to details
                </Button>
              </Link>
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                w="100%"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems={{ base: "center" }}
                gap="2"
              >
                {data.map((characters) => {
                  return (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          type: "spring",
                          bounce: 0.4,
                          duration: 0.8,
                          delay: 0.2,
                        }}
                      >
                        <Flex
                          flexDirection={{
                            base: "column",
                            sm: "column",
                            md: "row",
                            lg: "row",
                          }}
                          gap="2"
                          bgColor={accordbg}
                          minW={{
                            base: "calc(300px / 2)",
                            sm: "calc(400px / 2)",
                            md: "calc(720px / 2.5)",
                            lg: "calc(960px / 2.5)",
                          }}
                          maxW={{
                            base: "calc(300px / 2)",
                            sm: "calc(400px / 2)",
                          }}
                          alignItems={{ base: "center", sm: "center" }}
                          borderRadius="xl"
                          overflow="hidden"
                          key={characters.character.mal_id}
                        >
                          <Image
                            src={characters.character.images.jpg.image_url}
                            key={characters.character.images}
                            w={{
                              base: "150px",
                              sm: "calc(400px / 2)",
                              md: "100px",
                            }}
                            h="150px"
                            objectFit="cover"
                            borderRadius="lg"
                          ></Image>
                          <Flex
                            flexDirection="column"
                            justifyContent="center"
                            gap="2"
                            key={characters.character.mal_id}
                            textAlign={{ base: "center", md: "left" }}
                          >
                            <Text
                              color={charactername}
                              key={characters.character.name}
                            >
                              {characters.character.name}
                            </Text>
                            <Text key={characters.role}>{characters.role}</Text>
                          </Flex>
                        </Flex>
                      </motion.div>
                    </AnimatePresence>
                  );
                })}
              </Flex>
            </Flex>
            {/* CHARACTER CARDS END */}
          </motion.div>
        </AnimatePresence>
      </Flex>
    </>
  );
}
export default Characters;
