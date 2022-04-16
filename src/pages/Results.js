import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import { AnimeList } from "../components/AnimeList";
import { Heading } from "@chakra-ui/react";
import Helmet from "react-helmet";

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState([]);
  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.animeData = JSON.parse(localStorage.getItem("myData"));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
    console.log(search.animeData);
  }, [search]);
  return (
    <div>
      <Helmet title={`Results - ReactAL`}></Helmet>
      {(dataExists && <AnimeList data={search.animeData} />) || (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default Results;
