import React from "react";
import styled from "styled-components";

const HeadNav = () => {
  const NAV = styled.nav`
    background-color: #ff722b;
    display: flex;
    height: 100%;
    align-items: center;
  `;

  const LogoContainer = styled.div``;

  const Logo = styled.div`
    border: 2px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    padding: 5px 10px 5px 10px;
    margin: 10px 20px 10px 20px;
  `;

  const SiteName = styled.h1`
    font-size: 1.1rem;
    font-weight: 300;
    width: 15%;

    @media screen and (max-width: 600px) {
      display: none;
    }
  `;
  const SearchBarContainer = styled.div`
    width: 100%;
  `;
  const SearchBar = styled.input`
    border: none;
    width: 100%;
    padding: 10px;
  `;

  return (
    <>
      <NAV>
        <LogoContainer>
          <Logo> H </Logo>
        </LogoContainer>
        <SiteName>Search Hacker News</SiteName>
        <SearchBarContainer>
          <SearchBar></SearchBar>
        </SearchBarContainer>
        <div>Gear</div>
      </NAV>
    </>
  );
};

export default HeadNav;

// background-color: #ff742b !important;
// background-color: rgb(200, 61, 0);
