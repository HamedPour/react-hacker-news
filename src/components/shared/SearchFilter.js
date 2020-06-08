import React from "react";
import styled from "styled-components";

const SearchFilter = () => {
  const MainContainer = styled.div`
    background-color: #f6f6ef;
    display: flex;
    min-height: 40px;
    align-items: center;
    border: 2px solid blue;

    & span {
      padding: 0 5px;
    }
  `;
  const StoriesFilter = styled.ul`
    border: 1px solid red;
  `;

  const DropItem = styled.li`
    list-style: none;
    & button {
      color: red;
    }
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

  return (
    <>
      <MainContainer>
        <span>Search</span>
        <StoriesFilter>
          <DropItem>
            <button href="#">All</button>
            <button href="#">Stories</button>
            <button href="#">Comments</button>
          </DropItem>
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
