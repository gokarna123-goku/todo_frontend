import React, { useEffect } from "react";

import { getAllTodos } from "../redux/actions/index.js";

import { useDispatch } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <>
      <div>Hello all todos task.</div>
    </>
  );
};

export default Todos;
