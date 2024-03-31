import React, { useEffect } from "react";

const App = () => {
  const [todoForToday, setTodoForToday] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((res) => res.json().then((data) => setTodoForToday(data)));
  }, []);

  // setTimeout(() => {
  //   setTodoForToday({
  //     tite: "Gym jana hai taanu",
  //     description: "Shaam 6 -564",
  //     id: Math.random() * 1000,
  //   });
  // }, 1000);

  return (
    <div>
      {todoForToday.tite}
      {todoForToday.description}
      {todoForToday.id}
    </div>
  );
};

export default App;
