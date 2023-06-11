import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  
  const [allTask, setAllTask] = useState(TASKS);

  const onFilter = (cat) => {
    setAllTask(
      TASKS.filter((item) => {
        if (cat === "All") return true;
        return item.category !== cat;
      })
    );
  };

  const onTaskFormSubmit = (e, formData) => {
    e.preventDefault();
    // console.log(formData);
    // console.log(allTask);
    setAllTask([...allTask, formData]);
    // console.log(allTask);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onFilter={onFilter} categories={CATEGORIES} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={allTask} />
      {/* <TaskList tasks={TASKS} /> */}
    </div>
  );
}

export default App;
