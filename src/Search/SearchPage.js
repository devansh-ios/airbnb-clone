import { Button } from "@mui/material";
import React from "react";
import './SearchPage.css'
import SearchResult from "./SearchResult";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1> Stays Nearby </h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price </Button>
        <Button variant="outlined">Rooms and Beds </Button>
        <Button variant="outlined">More filters </Button>
      
      
        </div>
    <SearchResult
    img ="https://cdn.thespaces.com/wp-content/uploads/2023/07/CASA-DZUL_HERO.jpg"
    location="privte room in center of london"
    title="stay at thsi spacious edwardian house "
    description="1 guest . 1bedroom . 1bed . 1.5 shared bathroom
     . Wifi . kitchen . Free parking"
     star={4.73}
     price="$43/night"
    />   
    <SearchResult
    img =" https://cdn.thespaces.com/wp-content/uploads/2023/07/Muji-Base-Kamogawa_03.jpg"
    location="privte room in center of london"
    title="stay at thsi spacious edwardian house "
    description="1 guest . 1bedroom . 1bed . 1.5 shared bathroom
     . Wifi . kitchen . Free parking"
     star={4.73}
     price="$43/night"
    />   
    <SearchResult
    img ="https://cdn.thespaces.com/wp-content/uploads/2023/07/HERO-3.jpg"
    location="privte room in center of london"
    title="stay at thsi spacious edwardian house "
    description="1 guest . 1bedroom . 1bed . 1.5 shared bathroom
     . Wifi . kitchen . Free parking"
     star={4.73}
     price="$43/night"
    />   
    <SearchResult
    img =" https://cdn.thespaces.com/wp-content/uploads/2023/07/Mona_Athens_01.jpeg"
    location="privte room in center of london"
    title="stay at thsi spacious edwardian house "
    description="1 guest . 1bedroom . 1bed . 1.5 shared bathroom
     . Wifi . kitchen . Free parking"
     star={4.73}
     price="$43/night"
    />   
    <SearchResult
    img ="https://cdn.thespaces.com/wp-content/uploads/2023/07/West-Loch-Tarbert-4-950x633-1.jpeg "
    location="Duis cillum consectetur exercitation elit veniam exercitation ut labore fugiat culpa et adipisicing nostrud"
    title="stay at thsi spacious edwardian house "
    description="1 guest . 1bedroom . 1bed . 1.5 shared bathroom
     . Wifi . kitchen . Free parking.
     
     "
     star={4.73}
     price="$43/night"
    />   
    </div>
  );
};

export default SearchPage;
