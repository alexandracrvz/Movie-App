import React from "react";
import { useState } from "react";
import "./Addtolist.css";
import ListItem from "./ListItem";

function Addtolist() {
  const [saved, setSaved] = useState([]);
  const [newSavedName, setNewSavedName] = useState("");

  const handleChange = function (event) {
    setNewSavedName(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    const newSaved = {
      name: newSavedName,
    };

    if (saved.length === 0) {
      newSaved.id = 1;
    } else {
      const lastItemId = saved[saved.length - 1].id;
      newSaved.id = lastItemId + 1;
    }

    const savedCopy = [...saved];

    savedCopy.push(newSaved);

    setSaved(savedCopy);
    setNewSavedName("");
  };
  const clearList = function () {
    setSaved([]);
  };
  const removeSaved = function (id) {
    const updatedSaved = saved.filter((saved) => saved.id !== id);

    setSaved(updatedSaved);
  };
  const listItems = saved.map(function (item) {
    return (
      <ListItem
        delete={() => removeSaved(item.id)}
        key={item.id}
        itemName={item.name}
      />
    );
  });

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <input
            className="addfavorites"
            type="submit"
            value="Add to Favorites"
          />
        </form>
      </center>

      <ul>{listItems}</ul>
      <center>
        <button onClick={clearList}>Clear List</button>
      </center>
    </div>
  );
}

export default Addtolist;
