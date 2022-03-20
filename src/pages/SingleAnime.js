import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/search';
import { Box, Text } from '@chakra-ui/react'

export const SingleAnime = () => {
    const search = useContext(SearchContext);
    const [data, setData] = useState([]);
  return (
    <Box mt="100px">
        {search.animeData.map(({title, mal_id}) =>(
        <Text key={title}>{title}</Text>
    ))}</Box>
  )
}
