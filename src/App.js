import React from "react";
import HeadNav from "./components/HeadNav/HeadNav";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadNav />
        <SearchFilterBar />
      </header>
    </div>
  );
}

export default App;
