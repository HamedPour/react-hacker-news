import React, { useState, useEffect } from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Story from "./components/Story/Story";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [stories, setStories] = useState([]);
  const [loadingStories, setLoadingStories] = useState(false);
  const [totalStories] = useState(10);
  const [storiesPerPage] = useState(5);

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

  return (
    <div className="App">
      <header className="App-header">
        <HeadNav />
        <SearchFilterBar />
      </header>
      <main>
        {stories.map((story, index) => {
          return <Story key={index} loading={loadingStories} story={story} />;
        })}
      </main>
      <Pagination totalStories={totalStories} storiesPerPage={storiesPerPage} />
    </div>
  );
}

export default App;
