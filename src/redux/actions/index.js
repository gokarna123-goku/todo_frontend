import axios from "axios";

import { ADDNEW_TODO, GETALL_TODO } from "./type";

const API_URL = "http://localhost:8000";

// Adding new todo
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

// Fetching all todos
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

//
