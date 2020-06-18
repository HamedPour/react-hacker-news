import React, { useState, useEffect } from "react";
import Story from "../Story/Story";
import topStoriesServices from "../../services/topStoriesServices";

const StoryContainer = () => {
  // const [currentPageStories, setCurrentPageStories] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [storiesPerPage] = useState(10);
  const [loadingStories, setLoadingStories] = useState(false);
  const [storyIDs, setStoryIDs] = useState([]);

  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    // function limitStoriesDisplayed() {
    //   // limit the amount of stories displayed on each page
    //   const lastStoryIndex = currentPage * storiesPerPage;
    //   const firstStoryIndex = lastStoryIndex - storiesPerPage;
    //   let availabePageStories = stories.slice(firstStoryIndex, lastStoryIndex);
    //   setCurrentPageStories(availabePageStories);
    // }
    // limitStoriesDisplayed();

    function fetchData() {
      setLoadingStories(true);
      topStoriesServices
        .fetchTopStoriesIds()
        .then((storyID) => setStoryIDs(storyID));
      setLoadingStories(false);
    }
    fetchData();
  }, []);

  function renderStories() {
    return storyIDs.map((storyID, index) => {
      return (
        <Story
          key={index}
          loading={loadingStories}
          searchedValue={searchedValue}
          storyID={storyID}
        />
      );
    });
  }

  return (
    <>
      <div>{renderStories()}</div>
    </>
  );
};

export default StoryContainer;
