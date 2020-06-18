import React from "react";
// import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
// import Pagination from "./components/Pagination/Pagination";
import StoryContainer from "./components/StoryContainer/StoryContainer";

function App() {
  // function handleInputValue(value) {
  //   // takes input value from HeadNav and create a new list of
  //   // stories that contain that value in their title

  //   // Set this useState value so it can be used to pass value down
  //   // to the Story component in order to HIGHLIGHT the value typed
  //   setSearchedValue(value);

  //   let storyList = [];
  //   stories.forEach((story) => {
  //     if (story.mainTitle.indexOf(value) >= 0) {
  //       storyList.push(story);
  //     }
  //   });
  //   setCurrentPageStories(storyList);
  // }

  // function updatePageHandler(number) {
  //   // This handles the pagination page number updater
  //   setCurrentPage(number);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <HeadNav inputValueHandler={handleInputValue} /> */}
        <SearchFilterBar />
      </header>
      <main>
        <StoryContainer />
      </main>
      <footer>
        {/* <Pagination
          updatePage={updatePageHandler}
          totalStories={stories.length}
          storiesPerPage={storiesPerPage}
        /> */}
      </footer>
    </div>
  );
}

export default App;
