import axios from "axios";
import { Task } from "../types/task";

// const API_BASE_URL = "http://localhost:5000";
// const API_BASE_URL = "https://back-eta-six.vercel.app";
const API_BASE_URL = "https://task-manager-back-production.up.railway.app";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const addTask = async (task: Task) => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id: string, data: { status: string }) => {
  console.log(data, "from task");
  const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, data);
  console.log(response, "from task");
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  return response.data;
};
