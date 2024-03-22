import React, { useEffect } from "react";

const App = () => {
  const [todoForToday, setTodoForToday] = React.useState({
    tite: "Gym jana hai taanu",
    description: "Shaam 6 - 7",
    id: 1,
  });

  setTimeout(() => {
    setTodoForToday({
      tite: "Gym jana hai taanu",
      description: "Shaam 6 -564",
      id: Math.random() * 1000,
    });
  }, 1000);

  return (
    <div>
      {todoForToday.tite}
      {todoForToday.description}
      {todoForToday.id}
    </div>
  );
};

export default App;
