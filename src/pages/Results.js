import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import { AnimeList } from "../components/AnimeList";
import { Heading } from "@chakra-ui/react";

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
  }, [search]);
  return (
    <div>
      {(dataExists && <AnimeList data={search.animeData} />) || (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default Results;
