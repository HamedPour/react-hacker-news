import React, { useState, useEffect } from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Story from "./components/Story/Story";
import Pagination from "./components/Pagination/Pagination";
import topStoriesServices from "./services/topStoriesServices";

function App() {
  const [stories, setStories] = useState([]);
  const [loadingStories, setLoadingStories] = useState(false);
  const [storiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageStories, setCurrentPageStories] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    /**
     * This is a temp API solution. I will use Axios once I get
     * a proper backend setup
     */
    // limit the amount of stories displayed on each page
    const lastStoryIndex = currentPage * storiesPerPage;
    const firstStoryIndex = lastStoryIndex - storiesPerPage;
    let availabePageStories = stories.slice(firstStoryIndex, lastStoryIndex);
    setCurrentPageStories(availabePageStories);

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!! WE ARE HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // sorting out how to call and consume this api correctly.
    async function getTopStoriesIds() {
      // had to make this async func here in useEffect in otder to
      // resolve this api call. Vue does this better!!
      const result = await topStoriesServices.topStoriesIds();
      setStoryIDs(result);
    }
    getTopStoriesIds();

    const fetchDbData = () => {
      setLoadingStories(true);
      const dbData = require("./services/mockDB.json");
      setStories(dbData.stories);
      setLoadingStories(false);
    };
    fetchDbData();
  }, [currentPage, stories, storiesPerPage]);

  function updatePageHandler(number) {
    // This handles the pagination page number updater
    setCurrentPage(number);
  }

  function handleInputValue(value) {
    // takes input value from HeadNav and create a new list of
    // stories that contain that value in their title

    // Set this useState value so it can be used to pass value down
    // to the Story component in order to HIGHLIGHT the value typed
    setSearchedValue(value);

    let storyList = [];
    stories.forEach((story) => {
      if (story.mainTitle.indexOf(value) >= 0) {
        storyList.push(story);
      }
    });
    setCurrentPageStories(storyList);
  }

  function renderStories() {
    return currentPageStories.map((story, index) => {
      return (
        <Story
          key={index}
          loading={loadingStories}
          searchedValue={searchedValue}
          story={story}
        />
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeadNav inputValueHandler={handleInputValue} />
        <SearchFilterBar />
      </header>
      <main>{renderStories()}</main>
      <footer>
        <Pagination
          updatePage={updatePageHandler}
          totalStories={stories.length}
          storiesPerPage={storiesPerPage}
        />
      </footer>
    </div>
  );
}

export default App;
