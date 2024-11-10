export type TaskStatus = "To Do" | "On Progress" | "Done" | "Timeout";

export interface Task {
  _id?: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: TaskStatus;
  deadline: string;
}
