import React, { useState } from "react";


const App = () => {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const contactEvent = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        //use spread operator to add the array of properties from prevValue to return value and then it will set to contact
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={contactEvent}/>
        <input name="lName" placeholder="Last Name" onChange={contactEvent}/>
        <input name="email" placeholder="Email" onChange={contactEvent}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
