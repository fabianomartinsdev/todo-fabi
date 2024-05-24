"use client";
import { Plus } from "lucide-react";
import { useState, useRef } from "react";

export default function Home() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState<any>([]);

  function handleAddTasks() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false,
    };

    console.log(tasks);

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  }

  return (
    <>
      <header className="h-14 bg-red-400 flex items-center justify-center">
        <h1 className="text-lg">
          <span className="text-zinc-950">todo</span>.fabi
        </h1>
      </header>
      <main className="w-screen">
        <div className="flex items-center">
          <button
            className="bg-red-400 p-2 rounded-md m-4 hover:opacity-80"
            onClick={handleAddTasks}
          >
            <Plus></Plus>
          </button>
          <input
            type="text"
            className="h-10 rounded pl-6 w-auto text-red-300 outline-none focus:outline-red-400 bg-zinc-100"
            placeholder="Adicionar tarefa"
            ref={inputRef}
          />
        </div>
        <span className="block w-11/12 bg-red-400 h-0.5 m-auto opacity-30" />

        {tasks.length > 0 &&
          tasks.map(({ id, title }) => (
            <div className="flex  m-4" key={id}>
              <input type="checkbox" />
              <p className="text-red-400 ml-4">{title}</p>
            </div>
          ))}
        {!tasks.length && <p>Nenhuma tarefa...</p>}
      </main>
    </>
  );
}
