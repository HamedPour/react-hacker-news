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
  }, []);

  // limit the amount of stories displayed on each page
  const lastStoryIndex = currentPage * storiesPerPage;
  const firstStoryIndex = lastStoryIndex - storiesPerPage;
  const currentPageStories = stories.slice(firstStoryIndex, lastStoryIndex);

  function updatePageHandler(number) {
    setCurrentPage(number);
  }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Sort out how to extract title based on value and display it
  function handleInputValue(value) {
    let storyList = [];
    stories.forEach((story) => {
      if (story.mainTitle.indexOf(value) >= 0) {
        storyList.push(story);
      }
    });
    console.log(storyList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeadNav inputValueHandler={handleInputValue} />
        <SearchFilterBar />
      </header>
      <main>
        {currentPageStories.map((story, index) => {
          return <Story key={index} loading={loadingStories} story={story} />;
        })}
      </main>
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
