import React from "react";
import { toggleTodo } from "../redux/actions/index";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{ background: todo.done ? "#50C878" : "#EE4B2B" }}
    >
      <p className="task_name">{todo.data}</p>

      <div className="actions">
        <i className="fa-solid fa-pen"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
};

export default Todo;
