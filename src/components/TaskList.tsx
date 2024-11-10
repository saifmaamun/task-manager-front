import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import AddTaskDialog from "./AddTaskDialog";

const TaskList: React.FC = () => {
  // add task
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const { tasks } = useContext(TaskContext)!;

  // Get today's date for comparison
  const today = new Date();

  // Filter tasks by status
  const expiredTasks = tasks.filter(
    (task) => new Date(task.deadline) < today && task.status !== "Done"
  );
  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "On Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="bg-white  rounded-lg px-2 shadow-md space-y-8">
      {/* Section 1: Expired Tasks */}
      <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-600">
        <h2 className="text-lg font-semibold text-red-600 mb-2">
          Expired Tasks
        </h2>
        <p className="text-sm text-gray-700">
          Total Expired Tasks: {expiredTasks.length}
        </p>
        {expiredTasks.length > 0 ? (
          <ul className="list-disc list-inside mt-2">
            {expiredTasks.map((task) => (
              <li key={task.id}>
                <span className="font-semibold">{task.title}</span> -{" "}
                <span className="text-gray-500">{task.deadline}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No expired tasks</p>
        )}
      </div>

      {/* Section 2: Active Tasks Count */}
      <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-600">
        <h2 className="text-lg font-semibold text-yellow-600 mb-2">
          Active Tasks
        </h2>
        <p className="text-sm text-gray-700">
          {todoTasks.length + inProgressTasks.length + doneTasks.length}
        </p>
      </div>

      {/* Section 3: Completed Tasks Count */}
      <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-600">
        <h2 className="text-lg font-semibold text-green-600 mb-2">
          Completed Tasks
        </h2>
        <p className="text-sm text-gray-700">
          Total Completed Tasks: {doneTasks.length}/
          {todoTasks.length + inProgressTasks.length + doneTasks.length}
        </p>
      </div>

      {/* Add Task Button */}
      <div className="flex justify-end">
        <button
          className="bg-[#0D062D] text-white py-3 px-6 rounded-2xl w-full shadow  transition duration-300"
          onClick={handleOpenDialog}
        >
          + Add Task
        </button>
        <AddTaskDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
      </div>
    </div>
  );
};

export default TaskList;
