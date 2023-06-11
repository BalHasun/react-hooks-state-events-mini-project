import React from "react";

function Task({ onRemove, text, category }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onRemove} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
