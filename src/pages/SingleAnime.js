import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/search';
import { Box, Image } from '@chakra-ui/react'

export const SingleAnime = () => {
    const search = useContext(SearchContext);
    console.log(search.animeData)
  return (
    <Box mt="100px">
      {search.animeData.map(({ images, mal_id }) => (
        <Image key={mal_id} src={images.jpg.image_url}></Image>
      ))}
    </Box>
  )
}