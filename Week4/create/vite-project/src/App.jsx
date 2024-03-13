import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState({
    title: "My first todo",
    description: "My first todo description",
    id: 1,
  });

  setInterval(() => {
    setTodo({
      title: " Khana khalo",
      description: "khana time se khana hai bhai",
      id: 64544,
    });
  }, 2000);

  return (
    <>
      <h1>Hello </h1> {todo.title}
      {todo.description}
      {todo.id}
      <PersonName firstName={todo.description} lastName={todo.id} />
    </>
  );
}

// props are read only and can be rendered only 
// state variables are also used pass the data from parent to child component or pass as the cvalues to the props 

function PersonName(props) {
  <div>
    {props.firstName} {props.lastName}
  </div>
}

export default App;
