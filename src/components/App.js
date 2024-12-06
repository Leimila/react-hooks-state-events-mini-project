import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    console.log("Tasks state updated: ", tasks);
  }, [tasks]);

  useEffect(() => {
    console.log("Selected category updated: ", selectedCategory);
  }, [selectedCategory]);

  const handleDelete = (id) => {
    console.log("Deleting task with id: ", id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskFormSubmit = (newTask) => {
    console.log("Adding new task: ", newTask);
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]); // Ensure a unique ID
  };

  const filteredTasks = tasks.filter(
    task => selectedCategory === 'All' || task.category === selectedCategory
  );

  console.log("Filtered tasks: ", filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
