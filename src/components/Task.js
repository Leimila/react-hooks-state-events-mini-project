import React from "react";

function Task({ task, onDelete }) {
  console.log("Rendering Task: ", task);
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => onDelete(task.id)} className="delete">X</button>
    </div>
  );
}

export default Task;
