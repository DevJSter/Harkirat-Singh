import "./App.css";
import { useState } from "react";

var todoForToday = {
  title: "Go to Gym",
  time: "From 7 to 11",
  description: "Go to gym and do the workout",
};

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
    },{
      title: "My first todo",
      description: "My first",
      id: 45,
    },{
      title: "My first todo",
      description: "My first",
      id: 789,
    });
  }, 2000);

  return (
    <>
    {todo.map((todo) => {
      return (
        <div>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.id}</p>
        </div>
      );
    })}
      <PersonName firstName={todo.description} lastName={todo.id}>
        {" "}
      </PersonName>
    </>
  );
}

// props are read only and can be rendered only
// state variables are also used pass the data from parent to child component or pass as the cvalues to the props
//Conponents can accept the props and can be used to render the data

function PersonName(props) {
  return (
    <div>
      {props.firstName}, {props.lastName}
    </div>
  );
}

export default App;
