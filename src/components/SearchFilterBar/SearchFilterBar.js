import React, { useState } from "react";
import MainFilterContainer from "./styledComponents/MainFilterContainer";
import StoriesFilter from "./styledComponents/StoriesFilter";
import DropDownBox from "../DropDownBox/DropDownBox";

const SearchFilter = () => {
  const storyFilterItems = ["All", "Stories", "Comments"];
  const [dropBoxVisible, setDropBoxVisible] = useState(false);
  const [storyFilter, setStoryFilter] = useState("All");

  function toggleDropDownBoxVisibility() {
    setDropBoxVisible(!dropBoxVisible);
  }

  function handleItemSelected(item) {
    setStoryFilter(item);
  }

  return (
    <>
      <MainFilterContainer>
        <span>Search</span>
        <StoriesFilter onClick={toggleDropDownBoxVisibility}>
          <li>
            {storyFilter} <i className="fa fa-angle-down" />
          </li>
          <DropDownBox
            onItemSelected={(item) => handleItemSelected(item)}
            isVisible={dropBoxVisible}
            data={storyFilterItems}
          />
        </StoriesFilter>
        <span>by</span>
        <div>DROPDOWN</div>
        <span>for</span>
        <div>DROPDOWN</div>
        <span>21,263 results (0.02 seconds)</span>
      </MainFilterContainer>
    </>
  );
};

export default SearchFilter;
