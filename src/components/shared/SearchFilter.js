import React, { useState } from "react";
import styled from "styled-components";

const SearchFilter = () => {
  const MainContainer = styled.div`
    background-color: #f6f6ef;
    display: flex;
    min-height: 40px;
    align-items: center;
    border: 2px solid blue;
    text-selection: none;

    & span {
      font-size: 0.8rem;
      padding: 0 5px;
    }
  `;
  const StoriesFilter = styled.ul`
    padding: 3px 5px 3px 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
  `;

  const PopularityFilter = styled.ul`
    border: 1px solid green;
  `;

  const TimeFilter = styled.ul`
    border: 1px solid purple;
  `;

  const Results = styled.div`
    // I'll get back to you
    display: none;
  `;

  const DropDown = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    min-width: 100px;
    list-style: none;
    background-color: #fff;
    position: absolute;
    top: 40px;
    & li {
      padding: 10px 5px 10px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `;

  const [storyFilter, setStoryFilter] = useState([
    "All",
    "Stories",
    "Comments",
  ]);

  function dropDownMenu() {
    console.log("click");
  }

  return (
    <>
      <MainContainer>
        <span>Search</span>
        <StoriesFilter>
          <span>
            {storyFilter[0]} <i className="fa fa-angle-down" />
          </span>
          <DropDown>Drop Down items goes here</DropDown>
        </StoriesFilter>
        <span>by</span>
        <PopularityFilter>DROPDOWN</PopularityFilter>
        <span>for</span>
        <TimeFilter>DROPDOWN</TimeFilter>
        <Results>21,263 results (0.02 seconds)</Results>
      </MainContainer>
    </>
  );
};

export default SearchFilter;
