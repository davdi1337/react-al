import { Box, Flex, Image, Tag, TagLeftIcon, Text, TagLabel, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { useContext } from 'react';
import { SearchContext } from '../context/search';
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

export const AnimeList = () => {
    const search = useContext(SearchContext);
    const tagbg = useColorModeValue('blue', 'purple');
    const navigate = useNavigate();


    const onClickHandler = () => {
        return fetch(`https://api.jikan.moe/v4/anime?q=`)
        .then(response => response.json())
        .then(res => {
            search.setSingle(res);
            localStorage.setItem('singleData', JSON.stringify(res));
            navigate('/anime')
        })
      };
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap="5" position="relative" mt="100px">
        {search.animeData.map(({images, mal_id, title, score, year})=> (
            <Box key={title} w="250px" flexDirection="column" justifyContent="space-between" alignItems="center" display="flex" borderWidth="1px" borderRadius="md" textAlign="center" rowGap="5" p="2">
                <Image src={images.jpg.image_url} key={mal_id} alt={title} w="200px" h="300px" objectFit="cover" borderRadius="md"></Image>
                <Text>{title}</Text>
                <Tag size="md" colorScheme={tagbg}>
                    <TagLeftIcon as={FaStar}></TagLeftIcon>
                    <TagLabel>{score || "?"}</TagLabel>
                </Tag>
                <Link onClick={onClickHandler} textDecoration="none!important">
                <Button colorScheme={tagbg}>Learn more</Button>
                </Link>
            </Box>
        ))}
    </Flex>
  )
}
