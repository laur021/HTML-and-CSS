import React from "react";
import Contacts from "../contacts.js";
import Card from "./Card.jsx";

function App() {

console.log(Contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* .Map - loop to Contacts array then display the card component */}
      {/* Each object in Contacts will render <card> component */}
      {/* Then assign the props to each object in an array */}
      {Contacts.map((contact) =>
        (<Card 
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />))
      }
    </div>
  )
}


export default App;
