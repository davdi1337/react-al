import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import { Flex, Grid, Text } from "@chakra-ui/react";
import SeasonAnime from "../components/SeasonAnime";
import Welcome from "../components/Welcome";

const Home = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((res) => {
      search.animeData = res.data;
      localStorage.setItem("myData", JSON.stringify(res.data));
      navigate(`/results`);
    });
  };
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="400px"
    >
      <Welcome />
      <SeasonAnime />
    </Grid>
  );
};

export default Home;
