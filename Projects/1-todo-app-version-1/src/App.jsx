import AppName from "./Components/AppName";
import Todo from "./Components/ToDo";
import Todo1 from "./Components/Todo1";
import Todo2 from "./Components/Todo2";
import "./App.css";
function App() {
  return (
    <div className="todo-container">
      <AppName />
      <Todo />
      <div className="items-container">
        <Todo1/>
        <Todo2/>

      </div>
    </div>
  );
}

export default App;
 