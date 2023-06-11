import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  // console.log(tasks);

  const [allTasks, setAllTasks] = useState(tasks);
  // console.log(allTasks);


  const onRemove = (text) => {
    tasks = tasks.filter((task) => task.text !== text);
    // setAllTasks(allTasks.filter((task) => task.text !== text));
  };
  return (
    <div className="tasks">
      {tasks?.map((tasks, i) => {
        return (
          <Task
            key={i}
            onRemove={() => onRemove(tasks.text)}
            text={tasks.text}
            category={tasks.category}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
