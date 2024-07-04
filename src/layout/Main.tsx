"use client";
import { useState, useEffect } from "react";

import Task from "@/components/Task";
import TaskForm from "@/components/TaskForm";

type myTask = {
  id: string;
  name: string;
  isCompleted: boolean;
};

function Main() {
  const [tasks, setTasks] = useState<myTask[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, [tasks]);

  function removeTask(id: string) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.error(err));
  }

  return (
    <main>
      <TaskForm />
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            handleRemove={removeTask}
          />
        ))}
    </main>
  );
}

export default Main;
