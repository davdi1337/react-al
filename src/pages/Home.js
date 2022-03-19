import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import { FaSearch } from "react-icons/fa";
import {
  Input,
  IconButton,
  Grid,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Home = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((res) => {
      search.setData(res.data);
      localStorage.setItem("myData", JSON.stringify(res.data));
      navigate("/results");
    });
  };
  return (
    <Grid flexDirection="column" justifyContent="center" alignItems="center">
      <Grid>
        <Grid>
          <form onSubmit={handleSearch}>
            <InputGroup>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
