import React, { useState, useEffect } from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Story from "./components/Story/Story";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [stories, setStories] = useState([]);
  const [loadingStories, setLoadingStories] = useState(false);
  const [storiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageStories, setCurrentPageStories] = useState([]);

  useEffect(() => {
    /**
     * This is a temp API solution. I will use Axios once I get
     * a proper backend setup
     */
    const fetchDbData = () => {
      setLoadingStories(true);
      const dbData = require("./services/mockDB.json");
      setStories(dbData.stories);
      setLoadingStories(false);
    };
    fetchDbData();

    // limit the amount of stories displayed on each page
    const lastStoryIndex = currentPage * storiesPerPage;
    const firstStoryIndex = lastStoryIndex - storiesPerPage;
    let availabePageStories = stories.slice(firstStoryIndex, lastStoryIndex);
    setCurrentPageStories(availabePageStories);
  }, [currentPage, stories, storiesPerPage]);

  function updatePageHandler(number) {
    // This handles the pagination page number updater
    setCurrentPage(number);
  }

  function handleInputValue(value) {
    // takes input value from HeadNav and create a new list of
    // stories that contain that value in their title
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
      return <Story key={index} loading={loadingStories} story={story} />;
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
