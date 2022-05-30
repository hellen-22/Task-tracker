import React from "react";
import { FaTimes } from "react-icons/fa";
import "./../css/style.css";

function Task({ task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={ () => onToggle(task.id) }>
      <h4>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
