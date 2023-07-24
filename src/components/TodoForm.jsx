import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  // Form Submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText('');
  };

  //   value submit
  const onInputSubmit = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form className="todo_form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          className="todo_input"
          onChange={onInputSubmit}
          value={text}
        />
      </form>
    </>
  );
};

export default TodoForm;
