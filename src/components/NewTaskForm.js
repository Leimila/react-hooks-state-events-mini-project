import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with: ", { text, category });
    onTaskFormSubmit({ text, category });
    setText(''); // Clear the form
    setCategory(categories[1]); // Reset to default category
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => {
            console.log("Text input changed: ", e.target.value);
            setText(e.target.value);
          }}
          placeholder="New task"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => {
            console.log("Category selected: ", e.target.value);
            setCategory(e.target.value);
          }}
        >
          {categories.filter(cat => cat !== "All").map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
