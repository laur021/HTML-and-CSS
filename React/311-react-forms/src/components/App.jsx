import React from "react";
import { useState } from "react";

const App = () => {

  //state for input tag with onchange event
  const[text, setText] = useState("");
  //state for submit button with onclick even
  const[text2, setText2] = useState("");

  //event that will handle the onchange from input
  const handleOnChanged = (event) => setText(event.target.value)
  //event that will handle the onclick from button, the setText value is from the 1st state, just to make sure that it will not realtime changing
  const handleOnClick = () => setText2(text);

  return (
    <div className="container">
      <h1>{text2}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleOnChanged}/>
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default App;

// scenario - the header will update the value based from input tag after i click submit button
