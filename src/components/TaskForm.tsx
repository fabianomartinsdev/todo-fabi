import { useState } from "react";

import { Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

type Tasks = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type Value = string;

function TaskForm() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [value, setValue] = useState<Value>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  function handleAddTasks() {
    const task = {
      id: uuidv4(),
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
    </main>
  );
}

export default TaskForm;
