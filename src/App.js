import React from "react";
import { Search, List } from "./components";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Search />
      <List />
    </div>
  );
};

export default App;
