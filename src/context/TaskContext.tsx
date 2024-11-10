import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Task } from "../types/task";
import { fetchTasks, addTask, updateTask, deleteTask } from "../api/tasks";

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

  createTask: (task: Task) => Promise<void>;
  editTask: (id: string, data: { status: string }) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    loadTasks();
  }, [tasks]);

  // Create a new task
  const createTask = async (task: Task) => {
    try {
      const newTask = await addTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  // Edit an existing task
  const editTask = async (id: string, data: { status: string }) => {
    const updated = await updateTask(id, data);
    console.log(updated, "from context");
  };

  // Delete a task
  const removeTask = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
