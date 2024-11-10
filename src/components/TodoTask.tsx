import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TodoTask: React.FC = () => {
  const { tasks, editTask } = useContext(TaskContext)!;

  const todoTasks = tasks.filter((task) => task.status === "To Do");

  const handleStatusChange = (id: string, value: string) => {
    console.log(id);
    const data = {
      status: value,
    };
    editTask(id, data);
  };

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
          <div key={task._id} className="mb-4 p-3 bg-white rounded-md shadow">
            <p className="text-sm text-[#FFA500] bg-[#dfa87434] inline-block px-2 rounded">
              {task.priority}
            </p>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span className="text-xs text-gray-400">
              Deadline: {task.deadline}
            </span>
            {/* <StatusChange />
             */}

            <div className="flex justify-between items-center my-4">
              <button
                className="text-[#FFA500] bg-[#dfa87434] px-4 rounded py-2"
                onClick={() =>
                  handleStatusChange(task._id as string, "On Progress")
                }
              >
                On Progress
              </button>
              <button
                className=" text-[#8BC48A] bg-[#83c29d33] px-4 rounded py-2"
                onClick={() => handleStatusChange(task._id as string, "Done")}
              >
                Done
              </button>

              <button className=" text-red-500 bg-red-200 px-4 rounded py-2">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks in To Do</p>
      )}
    </div>
  );
};

export default TodoTask;
