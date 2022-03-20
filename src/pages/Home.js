import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import { Grid, Heading } from "@chakra-ui/react";
import TopAnime from "../components/TopAnime";
import TopManga from "../components/TopManga";

const Home = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

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
      <Heading mt="100px" display="flex" justifyContent="center" w="100%">
        Top Mangas
      </Heading>
      <TopManga />
    </Grid>
  );
};

export default Home;
