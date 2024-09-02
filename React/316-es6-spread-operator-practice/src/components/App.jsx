import React, {useState} from "react";


const App = () => {

  //state for input
  const [item, addItem] = useState("");
  //state for button
  const [itemList, addItemList] = useState([]);

  //event for adding item thru input event change
  const handleAddItemEvent = (event) => addItem(event.target.value);

  //event for adding item to item list using button
  const handleAddItemListEvent = () => {
    addItemList((prevList) => [
        ...prevList, //exisiting list
        { content: item } //property of exisiting list
      ]     
    );
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <input
          type="text"
          value={item}
          onChange={handleAddItemEvent}
        />
        <button onClick={handleAddItemListEvent}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
