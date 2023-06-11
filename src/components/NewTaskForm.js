import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const formData = {
    text: details,
    category: category,
  };
  return (
    <form
      onSubmit={(e) => onTaskFormSubmit(e, formData)}
      className="new-task-form"
    >
      <label>
        Details
        <input
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
        >
          {categories.map((cat, i) => {
            return (
              <option key={i} value={cat}>
                {cat}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
