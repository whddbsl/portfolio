import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Project from './components/Project';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <Welcome onEnter={handleEnter} />
      ) : (
        <>
          <Home />
          <Project />
        </>
      )}
    </>
  );
};

export default App;
