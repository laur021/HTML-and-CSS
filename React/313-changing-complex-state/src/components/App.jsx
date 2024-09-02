import React, { useState } from "react";


const App = () => {

const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
})

const handleNameChanged = (event) => {

  //destructuring properties of an object
  const {name, value} = event.target;

  //prevValue act as the previous object
  setFullName((prevValue) => {
    if (name === "fName"){
      return {
        fName: value,
        lName: prevValue.lName
      }
    }else if (name === "lName"){
      return {
        fName: prevValue.fName,
        lName: value
      }
    }
  })
}

return <div className="container">
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <form>
      <input name="fName" placeholder="First Name" onChange={handleNameChanged} />
      <input name="lName" placeholder="Last Name" onChange={handleNameChanged} />
      <button>Submit</button>
    </form>
</div>
}

export default App;
