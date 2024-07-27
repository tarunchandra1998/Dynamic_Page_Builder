import React from "react";
import PageBuilder from "./Components/PageBuilder";

import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Page Builder</h1>
      </header>
      <main>
        <PageBuilder />
      </main>
    </div>
  );
}

export default App;
