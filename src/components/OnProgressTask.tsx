import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const OnProgressTask: React.FC = () => {
  const { tasks, editTask, removeTask } = useContext(TaskContext)!;
  const onProgressTasks = tasks.filter((task) => task.status === "On Progress");
  const handleStatusChange = (id: string, value: string) => {
    console.log(id);
    const data = {
      status: value,
    };
    console.log(data, "from op ");
    editTask(id, data);
  };
  const handleDelete = (id: string) => {
    removeTask(id);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-center gap-2 mb-4 items-center">
        <h2 className="text-xl font-bold text-center">On Progress</h2>
        <p className="text-sm text-gray-500 bg-[#ECEDEE] inline-block px-2 rounded-full">
          {onProgressTasks.length || 0}
        </p>
      </div>
      <div className=" border-2 border-[#FFA500]  mb-2"></div>
      {onProgressTasks.length > 0 ? (
        onProgressTasks.map((task) => (
          <div key={task.id} className="mb-4 p-3 bg-white rounded-md shadow">
            <p className="text-sm text-[#FFA500] bg-[#dfa87434] inline-block px-2 rounded">
              {task.priority}
            </p>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span className="text-xs text-gray-400">
              Deadline: {task.deadline}
            </span>
            <div className="flex justify-between items-center my-4">
              <button
                className="text-[#5030E5]  bg-[#5130e517]  px-4 rounded py-2"
                onClick={() => handleStatusChange(task._id as string, "To Do")}
              >
                To Do
              </button>
              <button
                className=" text-[#8BC48A] bg-[#83c29d33] px-4 rounded py-2"
                onClick={() => handleStatusChange(task._id as string, "Done")}
              >
                Done
              </button>

              <button
                className=" text-red-500 bg-red-200 px-4 rounded py-2"
                onClick={() => handleDelete(task._id as string)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks in Progress</p>
      )}
    </div>
  );
};

export default OnProgressTask;
