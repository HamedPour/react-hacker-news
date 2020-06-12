import React, { useState, useEffect } from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Story from "./components/Story/Story";

function App() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    /**
     * This is a temp API solution. I will use Axios once I get
     * a proper backend setup
     */
    const dbData = require("./services/mockDB.json");
    setStories(dbData.stories);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <HeadNav />
        <SearchFilterBar />
      </header>
      <main>
        {stories.map((story, index) => {
          return <Story key={index} metaData={story} />;
        })}
      </main>
    </div>
  );
}

export default App;
