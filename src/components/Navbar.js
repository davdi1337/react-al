import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Link,
  IconButton,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import SwitchButton from "./SwitchButton";
import { FaSearch } from "react-icons/fa";

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
          <Flex className="navbar_left" justifyContent="left" w="100%">
            <Link fontSize="xl" fontWeight="bold" href="/">
              React MAL
            </Link>
          </Flex>

          <Flex className="navbar_right" justifyContent="right" w="100%">
            <form onSubmit={handleSearch}>
              <InputGroup w="300px">
                <Input
                  placeholder="Search anime"
                  onChange={(event) => setInput(event.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    icon={<FaSearch />}
                    onClick={handleSearch}
                    size="sm"
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
            </form>
            <SwitchButton></SwitchButton>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
