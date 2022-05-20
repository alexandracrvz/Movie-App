import { useState } from "react";

const ListItem = function (props) {
  const [completed, setCompleted] = useState(false);

  const markItemComplete = function () {
    setCompleted(!completed);
  };

  return (
    <li
      className={completed === true ? "completed" : ""}
      onClick={markItemComplete}
    >
      {props.itemName}
      <button onClick={props.delete}>Delete</button>
    </li>
  );
};

export default ListItem;
