import { Box, Flex, Input, InputGroup, InputLeftElement, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'
import SwitchButton from './SwitchButton'
import {FaSearch} from 'react-icons/fa'

function Navbar() {
    const navbarbg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
  return (
    <div>
        <Box w="100%" h="60px" bgColor={navbarbg} zIndex="999" backdropFilter="blur(10px) saturate(200%)">
            <Flex alignItems="center" h="100%" mx="3">
                <Flex className="navbar_left" justifyContent="left" w="100%">
                    <Text fontSize="xl" fontWeight="bold">React MAL</Text>
                </Flex>

                <Flex className="navbar_right" justifyContent="right" w="100%">
                <InputGroup display="none" maxW="250px" variant="filled">
                    <InputLeftElement><FaSearch/></InputLeftElement>
                    <Input placeholder="Search anime"></Input>
                </InputGroup>
                <SwitchButton></SwitchButton>
                </Flex>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar