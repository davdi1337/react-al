import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
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
  console.log("YES");
  return (
    <div>
      {(dataExists &&
        search.animeData.map(({ images }) => (
          <img src={images.jpg.image_url} />
        ))) ||
        "Data does not exists"}
    </div>
  );
};

export default Results;
