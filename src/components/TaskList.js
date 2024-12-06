import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks, onDelete }) {
  console.log("Rendering TaskList with tasks: ", tasks);
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
