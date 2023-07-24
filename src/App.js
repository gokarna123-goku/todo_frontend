import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
