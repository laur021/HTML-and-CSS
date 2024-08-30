import React from "react";
import { useState } from "react";

const App = () => {
  
  //react state
  //for changing of text
  const [headerText, setHeaderText] = useState("Hello");
  //for changing button color
  const [isHovered, setIsHovered] = useState(false);

  //function event
  const handleClick = () => setHeaderText("hi");
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);
  
  //DOM
  return <div className="container">
    <h1>{headerText}</h1>
    <input type="text" placeholder="What's your name?" />
    {/* change the value of class based on boolean usestatevariable */}
    <button className={isHovered ? "hoveredButton" : "unHoveredButton"}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
    Submit
    </button>
    </div>
}

export default App;
