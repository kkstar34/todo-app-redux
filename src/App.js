import { useSelector } from "react-redux";
import "./css/App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="App">
      <div className="left">
        <div className="card">
          <div className="header">
            <div>
              <h1 className="title">Shoping List</h1>
            </div>
            <AddTodo />
          </div>
          <div className="body">
            {todos.map((todo) => {
              return <Todo todo={todo} />;
            })}
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default App;
