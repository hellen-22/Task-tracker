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
      reminder: false,
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

  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }

  return (
    <div className="App">
      <Header/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ( "No tasks available") }
      
    </div>
  );
}

export default App;
