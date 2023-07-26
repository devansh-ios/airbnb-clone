import React from "react";
import "./Search.css";
import { Button } from "@mui/material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { PeopleAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
const navi = useNavigate()
  const selectionRange = {
    start: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleAlt />
      </h2>
      <input min={0} defaultValue={2} />
      <Button onClick={()=>navi('/search')}> Search Airbnb</Button>
    </div>
  );
};

export default Search;
