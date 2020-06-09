import React from "react";
import Nav from "./styledComponents/Nav";
import Logo from "./styledComponents/Logo";
import SiteName from "./styledComponents/SiteName";
import SearchBarContainer from "./styledComponents/SearchBarContainer";
import SearchIcon from "./styledComponents/SearchIcon";
import SearchBar from "./styledComponents/SearchBar";
import CogIcon from "./styledComponents/CogIcon";
import SettingText from "./styledComponents/SettingText";

const HeadNav = () => {
  return (
    <>
      <Nav>
        <div>
          <Logo> H </Logo>
        </div>
        <SiteName>Search Hacker News</SiteName>
        <SearchBarContainer>
          <SearchIcon className="fa fa-search" />
          <SearchBar placeholder="Search stories by title" />
        </SearchBarContainer>
        <CogIcon className="fa fa-gear" />
        <SettingText>Settings</SettingText>
      </Nav>
    </>
  );
};

export default HeadNav;
