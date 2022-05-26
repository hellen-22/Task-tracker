import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Class Meeeting",
      day: "May 30th from 10am",
      reminder: true,
    },
    {
      id: 2,
      text: "Google Meeeting",
      day: "May 30th from 10am",
      reminder: true,
    },
    {
      id: 3,
      text: "Online Google Meeeting",
      day: "May 30th from 10am",
      reminder: false,
    },
  ]);
  
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
