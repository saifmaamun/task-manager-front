import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { addTask } from "../api/tasks";
import { Task } from "../types/task";

const TaskForm = () => {
  const { setTasks } = useContext(TaskContext)!;
  const [formData, setFormData] = useState<Partial<Task>>({
    title: "",
    description: "",
    priority: "Low",
    status: "To Do",
    deadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = await addTask(formData as Task);
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <select name="priority" onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="date" name="deadline" onChange={handleChange} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
