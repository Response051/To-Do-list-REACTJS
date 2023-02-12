import React from "react";
import { useState } from "react";

export function List() {
  const [count, setCount] = useState([
    { key: "1", name: "Task1", status: true },
    { key: "2", name: "Task2", status: false },
    { key: "3", name: "Task3", status: true },
  ]);
  const [newTask, setTask] = useState("");
  // addTask
  const addTask = () => {
    if (newTask) {
      let num = count.length + 1;
      let newEntry = { key: num, name: newTask, status: false };
      setCount([...count, newEntry]);
      setTask("");
    }
  };
  //   RemoveTask
  const RemoveTask = (key) => {
    let newTasks = count.filter((task) => task.key !== key);
    setCount(newTasks);
  };
  //   MarkTask as done
  const MarkDone = (key) => {
    let newTasks = count.map((task) => {
      if (task.key === key) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setCount(newTasks);
  };

  return (
    <div className="main">
      <h1 className="heading">A basic To-Do-App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <span>
        <button onClick={addTask}>AddTask</button>
      </span>
      {/* display message */}
      {count && count.length ? "" : "No Task!"}
      {/* display the rendered tasks */}
      {count &&
        count
          .sort((a, b) => (a.key > b.key ? 1 : -1))
          .map((task, index) => {
            return (
              <ul key={task.key} className={task.status ? "done" : "not-done"}>
                <li className="taskName">
                  {index + 1 + " "}
                  {task.name}
                  <span>
                    <button onClick={() => RemoveTask(task.key)}>
                      RemoveTask
                    </button>
                  </span>
                  <span>
                    <button onClick={(e) => MarkDone(task.key)}>
                      MarkTask
                    </button>
                  </span>
                </li>
              </ul>
            );
          })}
    </div>
  );
}
