import React from "react";
import { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const history = useNavigate();
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination </h1>

        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined" onClick={() => history("/search")}>
          Explore Nearby{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
