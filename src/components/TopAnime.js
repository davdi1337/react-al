import React, {useState, useEffect} from 'react'
import { Box, Button, Flex, useColorModeValue, Image, Tag, TagLabel, Text, Spinner } from '@chakra-ui/react'

function TopAnime() {
    const [data, setData] = useState([]);
    const tagbg = useColorModeValue('blue', 'purple');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/top/anime')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json.data);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    if (loading) return <Spinner size="xl"/>
  return (
    <Flex flexWrap="wrap" justifyContent="center" mt="50px" gap="5">
        {data.map(anime =>
            <Flex flexDirection="column" alignItems="center" w="250px" key={anime.mal_id} borderWidth="1px" justifyContent="space-between" borderRadius="md" textAlign="center" p="2">
                <Image w="200px" h="300px" objectFit="cover" key={anime.mal_id} src={anime.images.jpg.image_url} borderRadius="md"></Image>
                <Text key={anime.title}>{anime.title}</Text>
                <Tag colorScheme={tagbg} size="lg">
                <TagLabel>#{anime.rank}</TagLabel>
                </Tag>
            </Flex>
        )}
    </Flex>
  )
}
export default TopAnime
