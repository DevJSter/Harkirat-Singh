import React, { useEffect } from "react";

const App = () => {
  const [todoForToday, setTodoForToday] = React.useState({
    tite: "Gym jana hai taanu",
    description: "Shaam 6 - 7",
    id: 1,
  });
  
  let ctr = 0;

  if (ctr===0) {
  setTimeout(() => {
    setTodoForToday({
      tite: "Gym jana hai taanu",
      description: "Shaam 6 -564",
      id: 45, 
    });
  }, 1000);
  ctr = 1;
}

  return (
    <div>
      {todoForToday.tite}
      {todoForToday.description}
    </div>
  );
};

export default App;