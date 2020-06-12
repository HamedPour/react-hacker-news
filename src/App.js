import React from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import Story from "./components/Story/Story";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadNav />
        <SearchFilterBar />
      </header>
      <main>
        <Story />
      </main>
    </div>
  );
}

export default App;
