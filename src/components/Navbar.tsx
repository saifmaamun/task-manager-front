import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Navbar: React.FC = () => {
  //
  const { tasks } = useContext(TaskContext)!;
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const searchedData = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery)
    );
    console.log(searchedData);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-between items-center mx-4 my-12 rounded-2xl shadow-md shadow-gray-400 p-4 bg-[#ECEDEE] ">
      {/* Search Bar */}

      <div className=" flex justify-left items-center rounded-full bg-white py-1 ps-2 pe-12 border border-gray-300 shadow-md shadow-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search Project"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-1 bg-transparent  border-none  focus:outline-none  "
        />
      </div>

      {/* button */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="px-2 py-1 border border-gray-300 rounded-lg bg-white flex  items-center justify-around  gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path d="M 8.5 6 C 7.1364058 6 6 7.1364058 6 8.5 L 6 11.589844 C 6 13.886494 7.0554772 16.058837 8.859375 17.480469 A 1.50015 1.50015 0 0 0 8.8652344 17.484375 L 19 25.392578 L 19 40.5 A 1.50015 1.50015 0 0 0 21.371094 41.720703 L 28.371094 36.720703 A 1.50015 1.50015 0 0 0 29 35.5 L 29 25.392578 L 39.134766 17.484375 A 1.50015 1.50015 0 0 0 39.140625 17.480469 C 40.944482 16.058831 42 13.886494 42 11.589844 L 42 8.5 C 42 7.1364058 40.863594 6 39.5 6 L 8.5 6 z M 9 9 L 39 9 L 39 11.589844 C 39 12.969193 38.369258 14.268678 37.285156 15.123047 L 26.578125 23.476562 A 1.50015 1.50015 0 0 0 26 24.660156 L 26 34.728516 L 22 37.585938 L 22 24.660156 A 1.50015 1.50015 0 0 0 21.421875 23.476562 L 10.714844 15.123047 C 9.6307412 14.268678 9 12.969193 9 11.589844 L 9 9 z"></path>
          </svg>
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="10"
            height="10"
            viewBox="0 0 48 48"
          >
            <path d="M 43.486328 11.978516 A 1.50015 1.50015 0 0 0 42.439453 12.439453 L 24 30.878906 L 5.5605469 12.439453 A 1.50015 1.50015 0 0 0 4.484375 11.984375 A 1.50015 1.50015 0 0 0 3.4394531 14.560547 L 22.939453 34.060547 A 1.50015 1.50015 0 0 0 25.060547 34.060547 L 44.560547 14.560547 A 1.50015 1.50015 0 0 0 43.486328 11.978516 z"></path>
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="p-2">
              <li className="p-2 hover:bg-gray-100">Option 1</li>
              <li className="p-2 hover:bg-gray-100">Option 2</li>
              <li className="p-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
