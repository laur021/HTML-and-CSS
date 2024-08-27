import React from "react";
import {createRoot} from 'react-dom/client';

function Card(props){
  return <div>
    <h2>{props.header}</h2>
        <img
          src={props.imgsrc}
          alt={props.alt}
        />
        <p>{props.number}</p>
        <p>{props.email}</p>
  </div>
}

//the new root API
const root = createRoot(document.getElementById('root'));
root.render(
<div>
    <h1>My Contacts</h1>
    <Card
      header="Beyonce"
      imgsrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      number="+123 456 789"
      email="b@beyonce.com"/>
    <Card
      header="Jack Bauer"
      imgsrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      number="+987 654 321"
      email="jack@nowhere.com"/>
    <Card
      header="Chuck Norris"
      imgsrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
      number="+918 372 574"
      email="gmail@chucknorris.com"/>

  </div> ,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
