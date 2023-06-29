import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchfromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams(); // Extract the searchTerm value from the useParams object

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchfromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Resulte For
        <span style={{ color: "#FC1503" }}> {searchTerm} </span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
