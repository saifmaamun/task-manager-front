import React, { useContext } from "react";
import { Task } from "../types/task";
import { deleteTask } from "../api/tasks";
import { TaskContext } from "../context/TaskContext";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { setTasks } = useContext(TaskContext)!;

  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className={`task-item ${task.priority.toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
