import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="task">
      <p className="task_name">{todo.data}</p>

      <div className="actions">
        <i className="fa-solid fa-pen"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
};

export default Todo;
