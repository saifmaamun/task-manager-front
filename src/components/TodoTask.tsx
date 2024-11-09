import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TodoTask: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;

  const todoTasks = tasks.filter((task) => task.status === "To Do");

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-center gap-2 mb-4 items-center">
        <h2 className="text-xl font-bold text-center">To Do</h2>
        <p className="text-sm text-gray-500 bg-[#ECEDEE] inline-block px-2 rounded-full">
          {todoTasks.length || 0}
        </p>
      </div>
      <div className=" border-2 border-[#5030E5]  mb-2"></div>

      {todoTasks.length > 0 ? (
        todoTasks.map((task) => (
          <div key={task.id} className="mb-4 p-3 bg-white rounded-md shadow">
            <p className="text-sm text-[#FFA500] bg-[#dfa87434] inline-block px-2 rounded">
              {task.priority}
            </p>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span className="text-xs text-gray-400">
              Deadline: {task.deadline}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks in To Do</p>
      )}
    </div>
  );
};

export default TodoTask;
