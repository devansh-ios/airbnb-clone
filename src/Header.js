import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { ExpandMore } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="huheuh"
      />

      <div className="header_center">
      <input type="text"/>
      <SearchIcon/>
      </div>

<div className="header_right">
<p> Become a Host </p>
<LanguageIcon/>
<ExpandMore/>
<Avatar/>
</div>

    </div>
  );
};

export default Header;