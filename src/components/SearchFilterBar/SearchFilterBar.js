import React, { useState } from "react";
import MainFilterContainer from "./styledComponents/MainFilterContainer";
import StoriesFilter from "./styledComponents/StoriesFilter";
import DropDownBox from "../DropDownBox/DropDownBox";

const SearchFilter = () => {
  const [storyFilter, setStoryFilter] = useState([
    "All",
    "Stories",
    "Comments",
  ]);

  return (
    <>
      <MainFilterContainer>
        <span>Search</span>
        <StoriesFilter>
          <span>
            {storyFilter[0]} <i className="fa fa-angle-down" />
          </span>
          <DropDownBox data={[...storyFilter]} />
        </StoriesFilter>
        <span>by</span>
        <div>DROPDOWN</div>
        <span>for</span>
        <div>DROPDOWN</div>
        <div>21,263 results (0.02 seconds)</div>
      </MainFilterContainer>
    </>
  );
};

export default SearchFilter;
