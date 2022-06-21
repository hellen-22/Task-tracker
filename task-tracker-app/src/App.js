import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }
  
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }
  const [showAddTask, setShowAddTask] = useState(false);

  const handleClick = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="App" >
      <Header onClick={handleClick} />
      {showAddTask ? <AddTask onAdd={addTask} /> : null}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ( "No tasks available") }
      
    </div>
  );
}

export default App;
