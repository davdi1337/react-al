import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import { Box, Image } from "@chakra-ui/react";

export const SingleAnime = () => {
  const search = useContext(SearchContext);
  return (
    <Box mt="100px">
      <Image src={search.singleData.data.images.jpg.image_url} />
    </Box>
  );
};
