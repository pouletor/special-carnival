import React from "react";
import "./App.scss";

import Hello from "./atoms/Hello/Hello";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={"stranger"} />
      </header>
      <SearchPage />
    </div>
  );
}

export default App;
