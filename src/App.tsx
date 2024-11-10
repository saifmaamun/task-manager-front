import React from "react";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import TodoTask from "./components/TodoTask";
import OnProgressTask from "./components/OnProgressTask";

import TaskList from "./components/TaskList";
import TaskDone from "./components/TaskDone";

const App: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Task Sections */}
        <section className="flex flex-col md:flex-row justify-center items-start mx-auto px-4 py-6 gap-6">
          {/*Task List summery*/}
          <div className="flex-1 w-full md:w-1/4">
            <TaskList />
          </div>

          {/* To Do Task List */}
          <div className="flex-1 w-full md:w-1/4">
            <TodoTask />
          </div>

          {/* On Progress Task List */}
          <div className="flex-1 w-full md:w-1/4">
            <OnProgressTask />
          </div>

          {/* Done Task List */}
          <div className="flex-1 w-full md:w-1/4">
            <TaskDone />
          </div>
        </section>
      </div>
    </div>
  );
};
export default App;
