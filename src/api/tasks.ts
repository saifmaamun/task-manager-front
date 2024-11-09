import axios from "axios";
import { Task } from "../types/task";

const API_BASE_URL = "http://localhost:5000/";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const addTask = async (task: Task) => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id: string, task: Task) => {
  const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  return response.data;
};
