import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import SwitchButton from "./SwitchButton";
import { FaSearch } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const navbarbg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );

  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((res) => {
      search.animeData = res.data;
      localStorage.setItem("myData", JSON.stringify(res.data));
      navigate("/results");
      console.log(res);
    });
  };
  return (
    <div>
      <Box
        w="100%"
        h="60px"
        bgColor={navbarbg}
        zIndex="999"
        backdropFilter="blur(10px) saturate(200%)"
        position="fixed"
        top="0"
        boxShadow="md"
      >
        <Flex alignItems="center" h="100%" mx="3">
          <Flex
            className="navbar_left"
            justifyContent="left"
            w="100%"
            display={{ base: "none", md: "flex" }}
          >
            <Link fontSize="xl" fontWeight="bold" href="/">
              React MAL
            </Link>
          </Flex>

          <Flex
            className="navbar_right"
            justifyContent={{ base: "center", sm: "center", md: "right" }}
            w="100%"
          >
            <form onSubmit={handleSearch}>
              <InputGroup w="300px" display={{ base: "block", md: "block" }}>
                <Input
                  placeholder="Search anime"
                  onChange={(event) => setInput(event.target.value)}
                  borderRadius="lg"
                  pr={{ base: "4", sm: "2.5rem", lg: "3rem" }}
                  variant="filled"
                  bgColor={useColorModeValue("gray.200", "gray.900")}
                  _placeholder={{
                    color: useColorModeValue("gray.700", "gray.500"),
                  }}
                  _focus={{
                    bgColor: useColorModeValue("gray.200", "gray.900"),
                    borderColor: useColorModeValue("blue.500", "blue.200"),
                  }}
                />
                <InputRightElement>
                  <IconButton
                    icon={<FaSearch />}
                    onClick={handleSearch}
                    size="sm"
                    borderRadius="lg"
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
            </form>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                colorScheme="blue"
                display={{ base: "block", md: "none" }}
                ml="2"
              />
              <MenuList
                bgColor={useColorModeValue("gray.50", "gray.900")}
                border="none"
                boxShadow="lg"
              >
                <Link href="/" textDecoration="none!important">
                  <MenuItem
                    _focus={{
                      bgColor: useColorModeValue("gray.100", "gray.800"),
                    }}
                  >
                    Homepage
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <SwitchButton></SwitchButton>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
