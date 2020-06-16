import React, { useState } from "react";
import Nav from "./styledComponents/Nav";
import Logo from "./styledComponents/Logo";
import SiteName from "./styledComponents/SiteName";
import SearchBarContainer from "./styledComponents/SearchBarContainer";
import SearchIcon from "./styledComponents/SearchIcon";
import SearchBar from "./styledComponents/SearchBar";
import CogIcon from "./styledComponents/CogIcon";
import SettingText from "./styledComponents/SettingText";

const HeadNav = (props) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    let theInput = e.target.value;
    setInputValue(theInput);
    props.inputValueHandler(theInput);
  }

  return (
    <>
      <Nav>
        <div>
          <Logo> H </Logo>
        </div>
        <SiteName>Search Hacker News</SiteName>
        <SearchBarContainer>
          <SearchIcon className="fa fa-search" />
          <SearchBar
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            placeholder="Search stories by title"
          />
        </SearchBarContainer>
        <CogIcon className="fa fa-gear" />
        <SettingText>Settings</SettingText>
      </Nav>
    </>
  );
};

export default HeadNav;
