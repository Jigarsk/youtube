import { Paper, IconButton,Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Label, Search} from "@mui/icons-material"


const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");  
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
        setsearchTerm(""); 

      }
  };
  
  return (
        
      <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
            <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
          {/* <IconButton type="submit" sx={{ p: '10px' }} color="primary" aria-label="search">
         
          </IconButton> */}
        </Paper>
      
  );
};

export default SearchBar;
