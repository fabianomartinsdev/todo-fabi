"use client";
import { useState, useRef } from "react";

import { Plus, Trash2 } from "lucide-react";
import Task from "@/components/Task";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
  handleRemove?: any;
};

type Value = string;

function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState<Value>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  function handleAddTasks() {
    const task = {
      id: tasks.length + 1,
      name: value,
      isCompleted: false,
    };

    setTasks([...tasks, task]);

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((response) => response.json)
      .catch((err) => console.error(err));

    setValue("");
  }

  function removeTask(id: number) {
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
    <main className="w-screen">
      <div className="flex items-center">
        <button
          className="bg-red-400 p-2 rounded-md m-4 hover:opacity-80"
          onClick={handleAddTasks}
        >
          <Plus />
        </button>
        <input
          type="text"
          className="h-10 rounded pl-6 w-max text-red-300 outline-none focus:outline-red-400 bg-zinc-100"
          placeholder="Adicionar tarefa"
          onChange={handleChange}
        />
      </div>
      <span className="block w-11/12 bg-red-400 h-0.5 m-auto opacity-30" />

      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            id={task.id}
            isCompleted={task.isCompleted}
            handleRemove={removeTask}
          />
        ))}
    </main>
  );
}

export default Main;
