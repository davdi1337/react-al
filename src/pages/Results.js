import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState([]);
  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem("myData")));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
  }, [search]);
  return <div>{(dataExists && "Data Exist") || "Data does not exists"}</div>;
};

export default Results;