import React, { useState } from "react";
import MainFilterContainer from "./styledComponents/MainFilterContainer";
import FilterMenu from "./styledComponents/FilterMenu";
import DropDownBox from "../DropDownBox/DropDownBox";

const SearchFilter = () => {
  const storyFilterItems = ["All", "Stories", "Comments"];
  const popularityFilterItems = ["Popularity", "Date"];
  const timeFilterItems = ["All time", "Last 24h", "Past Year"];

  const [dropBoxVisible, setDropBoxVisible] = useState(false);
  const [dropDownIndex, setDropDownIndex] = useState(1);

  const [storyFilter, setStoryFilter] = useState("All");
  const [popularityFilter, setPopularityFilter] = useState("Popularity");
  const [timeFilter, setTimeFilter] = useState("All time");

  function toggleDropDownBoxVisibility(index) {
    setDropDownIndex(index);
    setDropBoxVisible(!dropBoxVisible);
  }

  function handleItemSelected(item) {
    /**
     * check to see if item being passing from DropDownBox component
     * is a member of any of the filter groups [storyFitlerItems, etc].
     * When you find the group set useState to show the item
     * in the correct group.
     */
    if (storyFilterItems.indexOf(item) >= 0) {
      setStoryFilter(item);
    } else if (popularityFilterItems.indexOf(item) >= 0) {
      setPopularityFilter(item);
    } else {
      setTimeFilter(item);
    }
  }

  return (
    <>
      <MainFilterContainer>
        <span>Search</span>
        <FilterMenu onClick={() => toggleDropDownBoxVisibility(1)}>
          <li>
            {storyFilter}{" "}
            <i
              className={
                dropBoxVisible && dropDownIndex === 1
                  ? "fa fa-angle-up"
                  : "fa fa-angle-down"
              }
            />
          </li>
          <DropDownBox
            onItemSelected={(item) => handleItemSelected(item)}
            isVisible={dropBoxVisible && dropDownIndex === 1}
            data={storyFilterItems}
          />
        </FilterMenu>
        <span>by</span>
        <FilterMenu onClick={() => toggleDropDownBoxVisibility(2)}>
          <li>
            {popularityFilter}{" "}
            <i
              className={
                dropBoxVisible && dropDownIndex === 2
                  ? "fa fa-angle-up"
                  : "fa fa-angle-down"
              }
            />
          </li>
          <DropDownBox
            onItemSelected={(item) => handleItemSelected(item)}
            isVisible={dropBoxVisible && dropDownIndex === 2}
            data={popularityFilterItems}
          />
        </FilterMenu>
        <span>for</span>
        <FilterMenu onClick={() => toggleDropDownBoxVisibility(3)}>
          <li>
            {timeFilter}{" "}
            <i
              className={
                dropBoxVisible && dropDownIndex === 3
                  ? "fa fa-angle-up"
                  : "fa fa-angle-down"
              }
            />
          </li>
          <DropDownBox
            onItemSelected={(item) => handleItemSelected(item)}
            isVisible={dropBoxVisible && dropDownIndex === 3}
            data={timeFilterItems}
          />
        </FilterMenu>
        <span>21,263 results (0.02 seconds)</span>
      </MainFilterContainer>
    </>
  );
};

export default SearchFilter;
