import React from "react";
import { Input } from "./Input";
import "../styles/Search.css";

export const Search = () => {
  return (
    <div className="search-container">
      <h3>NASA Search</h3>

      <Input />

      <div>
        <label>
          <input type="checkbox"></input>
        </label>

        <label>
          <input type="checkbox"></input>
        </label>
      </div>
    </div>
  );
};
