import React, { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  // Form Submit
  const onFormSubmit = () => {};

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
        />
      </form>
    </>
  );
};

export default TodoForm;
