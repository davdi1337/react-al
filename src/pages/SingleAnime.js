import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import { Box, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleAnime = () => {
  const search = useContext(SearchContext);
  const [, pageUpdate] = useState(false);
  const params = useParams();
  useEffect(async () => {
    if (Object.keys(search.singleData).length === 0) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      search.singleData = res.data;
      pageUpdate((p) => !p);
    }
  }, []);
  return (
    <Box mt="100px">
      {Object.keys(search.singleData).length !== 0 ? (
        <Image src={search.singleData.data.images.jpg.image_url} />
      ) : null}
    </Box>
  );
};
