import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/search";
import { Grid, Heading } from "@chakra-ui/react";
import TopAnime from "../components/TopAnime";

const Home = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((res) => {
      search.animeData = res.data;
      localStorage.setItem("myData", JSON.stringify(res.data));
      navigate("/results");
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
      <Heading mt="100px" display="flex" justifyContent="center" w="100%">
        Top Animes
      </Heading>
      <TopAnime />
    </Grid>
  );
};

export default Home;
