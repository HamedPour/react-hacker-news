import React from "react";
import styled from "styled-components";

const HeadNav = () => {
  const NAV = styled.nav`
    background-color: #ff742b;
    display: flex;
    height: 100%;
    align-items: center;
  `;

  const Logo = styled.div`
    border: 2px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    padding: 5px 10px 5px 10px;
    margin: 10px 20px 10px 20px;
    cursor: pointer;
  `;

  const SiteName = styled.h1`
    font-size: 1.1rem;
    font-weight: 300;
    padding: 5px 0px;
    margin-right: 10px;
    width: 15%;

    @media screen and (max-width: 600px) {
      display: none;
    }
  `;
  const SearchBarContainer = styled.div`
    width: 100%;
    padding: 7px 0;
    display: flex;
    background-color: #fff;
    align-items: center;
  `;
  const SearchIcon = styled.i`
    font-size: 1.4rem;
    padding: 0 10px 0 10px;
    opacity: 0.6;
    color: #ff247b;
  `;
  const SearchBar = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
  `;

  const CogIcon = styled.i`
    font-size: 2rem;
    margin: 0 10px 0 20px;
    cursor: pointer;
  `;

  const SettingText = styled.span`
    font-size: 1.2rem;
    padding-right: 5px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  return (
    <>
      <NAV>
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
      </NAV>
    </>
  );
};

export default HeadNav;
