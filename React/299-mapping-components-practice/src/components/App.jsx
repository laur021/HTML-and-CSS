import React from "react";
import Emojipedia from ".././emojipedia.js"
import Entry from "./Entry.jsx"

// function CreateEntry(props){
//   return <Entry
//   key={props.id}
//   id={props.id}
//   emoji={props.emoji}
//   name={props.name}
//   meaning={props.meaning}
//   />
// }

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
                {Emojipedia.map((item) =>
          (<Entry 
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />)
        )}
      </dl>
    </div>
  );
}

export default App;
