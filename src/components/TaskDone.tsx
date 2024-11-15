import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskDone: React.FC = () => {
  const { tasks, removeTask } = useContext(TaskContext)!;
  const doneTasks = tasks.filter((task) => task.status === "Done");

  const handleDelete = (id: string) => {
    removeTask(id);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-center gap-2 mb-4 items-center">
        <h2 className="text-xl font-bold text-center">Done</h2>
        <p className="text-sm text-gray-500 bg-[#ECEDEE] inline-block px-2 rounded-full">
          {doneTasks.length || 0}
        </p>
      </div>
      <div className=" border-2 border-[#8BC48A]  mb-2"></div>
      {doneTasks.length > 0 ? (
        doneTasks.map((task) => (
          <div key={task.id} className="mb-4 p-3 bg-white rounded-md shadow">
            <p className="text-sm text-[#8BC48A] bg-[#83c29d33] inline-block px-2 rounded">
              Completed
            </p>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span className="text-xs text-gray-400">
              Deadline: {task.deadline}
            </span>
            <div className="flex justify-between items-center my-4">
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
        <p className="text-gray-500">No tasks completed</p>
      )}
    </div>
  );
};

export default TaskDone;
