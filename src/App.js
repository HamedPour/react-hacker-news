import React, { useState } from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Pagination from "./components/Pagination/Pagination";
import StoryContainer from "./components/StoryContainer/StoryContainer";
import { STORIES_PER_PAGE } from "./Constants";

function App() {
  const [totalStories, setTotalStories] = useState(null);
  const [currentPaginationPage, setCurrentPaginationPage] = useState(1);

  function handleTotalStory(number) {
    // function handles the props sent from Pagination
    // It it used to pass the total number of stories pulled from
    // the api to Pagination in order to set pagination page numbers
    setTotalStories(number);
  }

  function handleUpdatePage(pageNumber) {
    // function handles props from Pagination.
    // It is used to see which current page number in Pagination
    // the user has clicked on.
    // ----> This is passed down to StoryContainer in order to help
    // ---- calculate how many stories are to be seen on each pagination
    // ---- page.
    console.log(pageNumber);
    setCurrentPaginationPage(pageNumber);
  }
  return (
    <div className="App">
      <header className="App-header">
        <HeadNav inputValueHandler={null} />
        <SearchFilterBar />
      </header>
      <main>
        <StoryContainer
          CurrentPaginationPage={currentPaginationPage}
          TotalStories={handleTotalStory}
        />
      </main>
      <footer>
        <Pagination
          updatePage={handleUpdatePage}
          totalStories={totalStories}
          storiesPerPage={STORIES_PER_PAGE}
        />
      </footer>
    </div>
  );
}

export default App;
