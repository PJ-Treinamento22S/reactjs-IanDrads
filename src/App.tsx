import React from "react";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Send from "./components/Send";

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Send />
    </div>
  );
}

export default App;
