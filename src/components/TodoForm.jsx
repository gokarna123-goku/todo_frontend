import React, { useState } from "react";

const TodoForm = () => {
  // Form Submit
  const onFormSubmit = () => {
    const [text, setText] = useState("");
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
          value={text}
          onChange={onInputSubmit}
        />
      </form>
    </>
  );
};

export default TodoForm;
