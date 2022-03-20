import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";
import {
  Grid
} from "@chakra-ui/react";
import TopAnime from '../components/TopAnime'

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
      console.log(res)
    });
  };
  return (
    <Grid flexDirection="column" justifyContent="center" alignItems="center" minH="400px">
      <Grid>
        <Grid>
        <TopAnime/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
