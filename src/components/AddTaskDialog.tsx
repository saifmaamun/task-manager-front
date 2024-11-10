import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

interface AddTaskDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ isOpen, onClose }) => {
  const taskContext = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [status, setStatus] = useState<"To Do" | "On Progress" | "Done">(
    "To Do"
  );
  const [deadline, setDeadline] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  if (!taskContext) return null;

  const { createTask } = taskContext;

  // Function to handle form submission
  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!title || !description || !priority || !status || !deadline) {
      setError("All fields are required.");
      return;
    }

    // Clear any previous errors
    setError("");

    try {
      await createTask({ title, description, priority, status, deadline });
      setShowSuccess(true);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  // Function to reset form fields and close the dialog
  const handleClose = () => {
    // Reset form fields
    setTitle("");
    setDescription("");
    setPriority("Low");
    setStatus("To Do");
    setDeadline("");
    setError("");
    setShowSuccess(false);

    // Call the onClose function passed as prop to close the dialog
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            {!showSuccess ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 mb-4 text-center">{error}</p>
                )}

                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                  required
                />

                {/* Description Input */}
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                  required
                />

                {/* Priority Selection */}
                <select
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value as "Low" | "Medium" | "High")
                  }
                  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                {/* Status Selection */}
                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value as "To Do" | "On Progress" | "Done"
                    )
                  }
                  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="To Do">To Do</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Done">Done</option>
                </select>

                {/* Deadline Picker */}
                <label className="block mb-2 font-semibold">Deadline</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                  required
                />

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                    onClick={handleClose} // Close and reset the form
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Task Added Successfully!
                </h3>
                <button
                  className="bg-green-600 text-white py-2 px-6 rounded-lg mt-4"
                  onClick={handleClose} // Close the dialog and reset the form
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskDialog;
