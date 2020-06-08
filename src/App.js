import React from "react";
import HeadNav from "./components/shared/HeadNav";
import SearchFilter from "./components/shared/SearchFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadNav />
        <SearchFilter />
      </header>
      <main>main content goes here</main>
    </div>
  );
}

export default App;
