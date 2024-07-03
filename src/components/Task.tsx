import { Trash2 } from "lucide-react";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
  handleRemove?: any;
};

function Task({ id, name, isCompleted, handleRemove }: Task) {
  const remove = (e: any) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className="flex justify-between m-4 items-center">
      <div className="flex">
        <input type="checkbox" />
        <p className="text-red-400 ml-4">{name}</p>
      </div>
      <button
        className="bg-red-400 p-2 rounded-md hover:opacity-80"
        onClick={remove}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

export default Task;
