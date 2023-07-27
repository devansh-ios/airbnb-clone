import React from "react";
import "./Search.css";
import { Button } from "@mui/material";
import "react-date-range/dist/styles.css";

import { useNavigate } from "react-router-dom";
const Search = () => {
 
const navi = useNavigate()
 

  return (
    <div className="search">
    <h2> Book Your Room Now!!!</h2>
      <form className="form_section">
      <label>Place</label>
      <input type="text" /><br/>
       
      <span>From:-</span><input type="date"/><br/>
      <span>To:-</span> <input type="date"/>
<br/>
      <label>Number Of People</label>
      <input type="number" /><br/>
<Button  className="button" variant="outlined" onClick={()=>{navi('/search')}}> Search Room </Button>
      </form>
     </div>
  );
};

export default Search;

