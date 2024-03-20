import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "My first todo",
      description: "My first todo description",
      id: 1,
    },
  ]);

  // Use useEffect instead of setInterval for side effects
  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          title: "Khana khalo",
          description: "Khana time se khana hai bhai",
          id: Math.random(), // Use a unique id here
        },
      ]);
    }, 2000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.id}</p>
        </div>
      ))}
      {/* This component seems unnecessary based on the provided code */}
      <PersonName firstName={todos.description} lastName={todos.id} />
    </>
  );
}

// Function component to display person's name
function PersonName(props) {
  return (
    <div>
      {props.firstName}, {props.lastName}
    </div>
  );
}

export default App;
